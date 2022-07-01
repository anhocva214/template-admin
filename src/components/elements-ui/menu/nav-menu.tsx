
import { IRoute, routerAppPush } from "@utils/routes"
import { useRouter } from "next/router"
import { ReactNode, useEffect, useMemo, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Collapsible } from 'collapsible-react-component'
import { settingActions, settingSelector } from "src/redux/setting.redux"


interface IProps {
    title: string,
    classIcon: string,
    items?: IRoute[],
    // key?: any,
    path: string,
    id: string
}

export default function NavMenu({ title, classIcon, items, path, id }: IProps) {

    const HEIGHT_CONTENT_ITEM = 36
    const router = useRouter()
    const dispatch = useDispatch()

    const [clicked, setClicked] = useState(false)
    const [actived, setActived] = useState(false)
    const [open, setOpen] = useState(false)

    const { activeNav } = useSelector(settingSelector)


    useEffect(() => {
        if (clicked && !!items) {
            setOpen(true)
        }
        else {
            setOpen(false)
        }
    }, [clicked])

    useEffect(() => {
        // console.log("path: ",path)
        // console.log("tab: ",activeNav.tab)
        if (path.length > 1 && activeNav.tab.indexOf(path)>=0) setActived(true)
        else setActived(false)
    }, [activeNav])

    useEffect(() => {
        if (actived && !!items) {
            setOpen(true)
        }
        else {
            setOpen(false)
            setClicked(false)
        }
    }, [actived])




    return (
        <div>
            <a
                role="button"
                onClick={() => {
                    if (items?.length > 0) {
                        if (!actived)
                            setClicked(!clicked)
                    }
                    else {
                        // router.push(path)    
                        dispatch(settingActions.setActiveNav({
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

            <Collapsible open={open}>
                <div className={`flex flex-col`}>
                    {items?.map((item, index) => !item.hidden && (
                        <a
                            key={item.path + "__" + index}
                            role="button"
                            onClick={() => {
                                // router.push(path + item.path)
                                dispatch(settingActions.setActiveNav({
                                    tab: item.path
                                }))
                            }}
                            className={`text-sm text-slate-300 cursor-pointer lg:hover:text-slate-50 pl-10 capitalize w-full lg:hover:bg-gray-800 rounded-md py-2 px-3 ${activeNav?.tab == item.path && "text-slate-50"}`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

            </Collapsible>

        </div>
    )
}