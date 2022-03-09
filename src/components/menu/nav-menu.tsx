import { settingActions } from "@actions/exports"
import { settingSelector } from "@store/slices/setting.slice"
import { IRoute, routerPush } from "@utils/routes"
import { useRouter } from "next/router"
import { ReactNode, useEffect, useMemo, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"



interface IProps {
    title: string,
    classIcon: string,
    items?: IRoute[],
    key?: any,
    path: string,
    id: string
}

export default function NavMenu({ title, classIcon, items, key, path, id }: IProps) {

    const HEIGHT_CONTENT_ITEM = 36
    const router = useRouter()
    const dispatch = useDispatch()

    const [clicked, setClicked] = useState(false)
    const [heightContent, setHeightContent] = useState(0)
    const [actived, setActived] = useState(false)

    const { activeNav } = useSelector(settingSelector)


    useEffect(() => {
        
        if (clicked && !!items) {
            setHeightContent(HEIGHT_CONTENT_ITEM * items.length)
        }
        else {
            setHeightContent(0)
        }


    }, [clicked])

    useEffect(() => {
        if (activeNav.id == id) setActived(true)
        else setActived(false)
    },[activeNav])

    useEffect(() => {
        if (actived && !!items){
            setHeightContent(HEIGHT_CONTENT_ITEM * items.length)
        }
        else{
            setHeightContent(0)
            setClicked(false)
        }
    }, [actived])

    


    return (
        <div key={key || 'Math.random()'}>
            <a
                role="button"
                onClick={() => {
                    if (items?.length > 0) {
                        if (!actived)
                        setClicked(!clicked)
                    }
                    else {
                        router.push(path)
                        dispatch(settingActions.setActiveNav({
                            id,
                            idChildrent: null,
                            tab: path
                        }))
                    }
                }}
                className={`cursor-pointer lg:hover:bg-gray-800 rounded-md py-2 px-3 mb-1 transition-all duration-300 group flex justify-between relative ${!!actived && " bg-gray-800"}`}
            >
                <h4 className={`text-slate-300 lg:group-hover:text-slate-50 font-medium ${!!actived && "text-slate-50"}`}>
                    <span className="mr-3">
                        <i className={classIcon}></i>
                    </span>
                    {title}
                </h4>
                {items?.length > 0 && (
                    <i className={`fa-solid fa-angle-right text-slate-300 lg:group-hover:text-slate-50 transition-all duration-300 text-sm flex align-item-center absolute right-2 top-1/2 -translate-y-1/2 ${clicked || actived ? 'rotate-90' : ''}`}></i>
                )}
            </a>
            <div style={{ height: heightContent }} className={`transition-all duration-300 overflow-hidden flex flex-col h-0`}>
                {items?.map((item, index) => (
                    <a
                        key={item.path + "__" + index}
                        role="button"
                        onClick={() => {
                            router.push(path + item.path)
                            dispatch(settingActions.setActiveNav({
                                id,
                                idChildrent: item.id,
                                tab: path+item.path
                            }))
                        }}
                        className={`text-sm text-slate-300 cursor-pointer lg:hover:text-slate-50 pl-10 capitalize w-full lg:hover:bg-gray-800 rounded-md py-2 px-3 ${activeNav?.idChildrent == item.id && "text-slate-50"}`}
                    >
                        {item.name}
                    </a>
                ))}


            </div>
        </div>
    )
}