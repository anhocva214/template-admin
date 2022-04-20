import { ReactNode, useState } from "react"

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
            <div className={`py-2 px-4 transition-all duration-300 ${active ? 'visible opacity-1 h-auto block' : 'h-0 invisible opacity-0 hidden'}`}>
                {children}
            </div>
        </div>
    )
}