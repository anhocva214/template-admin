import { ReactNode, useState } from "react"
import { Collapsible } from 'collapsible-react-component'


interface IProps {
    active: boolean,
    onSwitch: () => void,
    title: string,
    children: ReactNode
}

export default function AccordionItem({
    active,
    onSwitch,
    title,
    children
}: IProps) {

    return (
        <div className={`bg-white rounded-md border border-gray-300 transition-all duration-300 ${active ? 'shadow-lg' : ''}`}>
            <a role="button" onClick={() => onSwitch()} className="text-lg font-medium text-slate-500 py-2 px-4 flex justify-between items-center">
                <h5>{title}</h5>
                <span className={`transition-all duration-300 ${active ? 'rotate-90' : ''} `}>
                    <i className="fa-solid fa-angle-right"></i>
                </span>
            </a>

            <Collapsible open={active}>
                <div className={`py-2 px-4`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, sed
                    labore? Autem laboriosam minima corrupti rem repellat odio reiciendis
                    nihil! Eum natus dolorem atque blanditiis ipsam aperiam. Voluptatem,
                    exercitationem fugit.
                </div>

            </Collapsible>
        </div>
    )
}