import { ReactNode, useState } from "react"

interface IProps {
    open: boolean;
    onCancle: () => void;
    children: ReactNode
}

export default function Modal(props: IProps) {


    return (
        <div className={` ${props.open ? 'visible opacity-1' : 'invisible opacity-0'} `}>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded z-50">
                <div className="min-h-[100px] min-w-[300px] relative">
                    <button onClick={() => props.onCancle()} className="text-zinc-500 w-10 h-10 hover:text-red-500 transition-all duration-300 absolute top-0 right-0">
                        <i className="fa-solid fa-xmark-large"></i>
                    </button>
                    {props.children}
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-screen h-screen bg-black/25  z-40 `} />
        </div>
    )
}