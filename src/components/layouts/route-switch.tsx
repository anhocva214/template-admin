import { ReactNode } from "react";
import {useSelector} from "react-redux"
import {settingSelector} from '@redux/setting.redux'

export default function RouteSwitch({path, component}:{
    path: string,
    component: ReactNode
}){
    const { activeNav } = useSelector(settingSelector)

    if (path == activeNav.tab) return <>{component}</>;
    else return <></>
}
