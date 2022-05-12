import { ReactNode, useState } from "react"
import AccordionItem from "./item"


interface IProps {
    items:{
        title: string;
        component: ReactNode
    }[]
}


export default function Accordion({
    items
}: IProps) {

    const [activeItems, setActiveItems] = useState(1)

    return (
        <div className="flex flex-col gap-2">
            {items.map((item, index) => {
                return (
                    <AccordionItem
                        key={index}
                        active={activeItems == index}
                        onSwitch={() => {
                            
                            if (activeItems == index){
                                setActiveItems(-1)
                            }
                            else setActiveItems(index)
                        }}
                        title={item.title}
                    >
                        {item.component}
                    </AccordionItem>
                )
            })}
        </div>
    )
}