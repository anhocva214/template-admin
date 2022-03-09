import { alertActions } from "@actions/exports";
import { alertSelector } from "@store/slices/alert.slice";
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { IAlert } from "src/models/settings/alert";

interface IProps extends IAlert {

}

export default function Alert({ type = 'primary', message, timeout = null, id }: IProps) {

    const dispatch = useDispatch()

    const {alerts} = useSelector(alertSelector)

    const [active, setActive] = useState(false)
    const [change, setChange] = useState(0)
    const [close, setClose] = useState(false)
    const [closeForce, setCloseForce] = useState(false)

    const refWrapper = useRef<HTMLDivElement>()

    useEffect(() => {
        // console.log(id)
        setTimeout(() => {
            setActive(true)
        }, 100);
        if (timeout) setClose(true)
    }, [])

    useEffect(() => {
        // console.log(id, refWrapper?.current?.offsetHeight)
        if (change < 3) setTimeout(() => {
            setChange(change => change+1)
        }, 300);
    }, [change])

    const remove = () => {
        setActive(false)
        setTimeout(() => {
            dispatch(alertActions.remove({
                id
            }))
        }, 1000);
    }

    useEffect(() => {
        // console.log('close = ', close)
        if (close){
            if (alerts[0].id == id && timeout){
                setTimeout(() => {
                    remove()
                }, timeout);
            }
        }
    }, [alerts, close])



    return (
        <div
            className={`flex transition-all duration-[700ms] overflow-hidden ease-linear ${active ? `mb-2` : 'mb-0'}`}
            style={{height: active?refWrapper?.current?.offsetHeight==0?'100%':refWrapper?.current?.offsetHeight:0}}
        >
            <div  ref={refWrapper} className={`${type == 'danger' ? 'bg-red-500' : type == 'success' ? 'bg-green-500' : type == 'warning' ? 'bg-amber-500' : 'bg-blue-500'} transition-all duration-300 text-white text-sm w-full sm:w-[300px] rounded-sm shadow-lg flex justify-between ${active ? `translate-x-0` : 'translate-x-full'}`}>
                <span className="p-3 pr-0">
                    {message}
                </span>
                <button onClick={() =>{
                    remove()
                }} className="w-5 h-5 flex justify-center items-center p-4">
                    <i className="fa-regular fa-xmark text-lg"></i>
                </button>
            </div>
        </div>
    )
}