import Button from "@components/elements-ui/button";
import WrapperShadow from "@components/elements-ui/wrapper/wrapper-shadow";
import { useDispatch } from "react-redux";
import { alertActions } from "src/redux/alert.redux";


export default function ComponentAlertApp() {

    const dispatch = useDispatch()


    return (
        <>
            <WrapperShadow>
                <h5 className="mb-5 text-lg font-medium text-slate-500">Basic</h5>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div>
                        <div className="bg-blue-500 text-white text-sm w-full sm:w-[300px] rounded-sm shadow-lg flex justify-between">
                            <span className="p-3 pr-0">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </span>
                            <button className="w-5 h-5 flex justify-center items-center p-4">
                                <i className="fa-regular fa-xmark text-lg"></i>
                            </button>
                        </div>
                        <Button onClick={()=>dispatch(alertActions.info({
                            message: 'Test Info',
                            timeout: 2000
                        }))} size="sm" className="mt-3">Click me</Button>
                    </div>

                   <div>
                   <div className="bg-green-500 text-white text-sm w-full sm:w-[300px] rounded-sm shadow-lg flex justify-between">
                        <span className="p-3 pr-0">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </span>
                        <button className="w-5 h-5 flex justify-center items-center p-4">
                            <i className="fa-regular fa-xmark text-lg"></i>
                        </button>
                    </div>
                    <Button onClick={()=>dispatch(alertActions.success({
                            message: 'Test Success',
                            // timeout: 2000,
                        }))} size="sm" className="mt-3" color="success">Click me</Button>
                   </div>

                    <div className="bg-amber-500 text-white text-sm w-full sm:w-[300px] rounded-sm shadow-lg flex justify-between">
                        <span className="p-3 pr-0">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </span>
                        <button className="w-5 h-5 flex justify-center items-center p-4">
                            <i className="fa-regular fa-xmark text-lg"></i>
                        </button>
                    </div>

                    <div className="bg-red-500 text-white text-sm w-full sm:w-[300px] rounded-sm shadow-lg flex justify-between">
                        <span className="p-3 pr-0">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </span>
                        <button className="w-5 h-5 flex justify-center items-center p-4">
                            <i className="fa-regular fa-xmark text-lg"></i>
                        </button>
                    </div>
                </div>
            </WrapperShadow>
        </>
    )
}