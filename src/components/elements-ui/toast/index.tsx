
import { alertSelector } from "@store/alert.redux"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Alert from "../alert"


export default function Toast() {

    const { alerts } = useSelector(alertSelector)

    // setInterval(() =>{
    //     let a = [...alerts]
    //     a.push({id: alerts.length+1})
    //     setAlerts(alerts => a)
    // }, 3000)

    return (
        <div className="absolute top-0 left-0 z-50 w-full">
            {alerts.map(item => (
                <div key={item.id} className="float-right w-full flex justify-end transition-all duration-700">
                    <Alert {...item} />
                </div>
            ))}
        </div>
    )
}