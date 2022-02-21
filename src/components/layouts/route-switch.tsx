import { ReactNode } from "react";


export default function RouteSwitch({path, tab, component}:{
    path: string,
    tab: string,
    component: ReactNode
}){
    if (path == tab) return <>{component}</>;
    else return <></>
}
