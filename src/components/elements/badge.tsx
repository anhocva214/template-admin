import { ColorsType, getColor } from "@utils/constants";
import { ReactNode, useState } from "react";

interface IProps {
    children: ReactNode,
    color?: ColorsType,
    type?: 'basic' | 'outline' | 'label',
    rounded?: boolean,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    className?: string
}

export default function Badge({
    children,
    type = "basic",
    color = "primary",
    rounded = false,
    size = 'xs',
    className
}: IProps) {

    return (
        <span className={`
            ${color == 'danger' && type == "basic" ? 'bg-red-500 text-white border border-red-500' : color == 'success' && type == "basic" ? 'bg-green-500 text-white border border-green-500' : color == 'warning' && type == "basic" ? 'bg-amber-500 text-white border border-amber-500' : type == "basic" ? 'bg-blue-500 text-white border border-blue-500': ''} 
            
            ${color == 'danger' && type == "label" ? 'bg-red-100 text-red-500 border border-red-100' : color == 'success' && type == "label" ? 'bg-green-100 text-green-500 border border-green-100' : color == 'warning' && type == "label" ? 'bg-amber-100 text-amber-500 border border-amber-100' : type == "label" ? 'bg-blue-100 text-blue-500 border border-blue-100':''} 
            
            ${color == 'danger' && type == "outline" ? 'bg-white text-red-500 border border-red-500' : color == 'success' && type == "outline" ? 'bg-white text-green-500 border border-green-500' : color == 'warning' && type == "outline" ? 'bg-white text-amber-500 border border-amber-500' : type == "outline" ? 'bg-white text-blue-500 border border-blue-500':''}
           
            ${rounded?'rounded-full':'rounded-md'}
           
            ${size == 'xs' ? 'text-xs py-1 px-2' : size == 'sm' ? 'text-sm py-1 px-3' : size == 'lg' ? 'text-lg py-3 px-7' : size == 'xl' ? 'text-xl py-4 px-9' : 'py-2 px-5  text-base'}
            ${className}
        `.replaceAll('\n','').trim()}
        >
            {children}
        </span>
    )
}