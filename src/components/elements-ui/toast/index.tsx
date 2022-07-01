
import { alertSelector } from "@redux/alert.redux"
import { useSelector } from "react-redux"
import Alert from "../alert"


export default function Toast() {

    const { alerts } = useSelector(alertSelector)

    return (
        <div className="fixed top-0 right-0 z-50">
            {alerts.map(item => (
                <div key={item.id} className="float-right w-full flex justify-end transition-all duration-700">
                    <Alert {...item} />
                </div>
            ))}
        </div>
    )
}