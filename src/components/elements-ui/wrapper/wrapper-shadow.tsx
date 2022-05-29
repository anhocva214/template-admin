import { ReactNode } from "react";

interface IProps {
    children: ReactNode
}

export default function WrapperShadow({ children }: IProps) {
    return (
        <div
            style={{
                boxShadow: '0 2px 14px rgb(38 60 85 / 16%)'
            }}
            className="bg-white rounded-md w-full p-5"
        >
            {children}
        </div>
    )
}