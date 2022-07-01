import { ColorsType, getColor } from "@utils/constants";
import { ButtonHTMLAttributes, HTMLAttributes, ReactNode, useState } from "react";
import { CircleSpinner } from "react-spinners-kit";

interface IProps {
    children: ReactNode,
    color?: ColorsType,
    type?: 'basic' | 'outline' | 'label',
    rounded?: boolean,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    disabled?: boolean,
    onClick?: () => void,
    className?: string,
    loading?: boolean,
    typeBtn?: 'button' | 'submit' | 'reset',
}

export default function Button({
    children,
    type = "basic",
    color = "primary",
    rounded = false,
    size = 'md',
    disabled = false,
    onClick,
    className,
    loading = false,
    typeBtn = 'submit'
}: IProps) {

    return (
        <button className={`
            ${color == 'danger' && type == "basic" ? 'bg-red-500 hover:bg-red-400 active:bg-red-600 text-white border border-red-500 hover:border-red-400 active:border-red-600 disabled:hover:bg-red-400 disabled:bg-red-400 disabled:border-red-400' : color == 'success' && type == "basic" ? 'bg-green-500 hover:bg-green-400 active:bg-green-600 text-white border border-green-500 hover:border-green-400 active:border-green-600 disabled:hover:bg-green-400 disabled:bg-green-400 disabled:border-green-400' : color == 'warning' && type == "basic" ? 'bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-white border border-amber-500 hover:border-amber-400 active:border-amber-600 disabled:hover:bg-amber-400 disabled:bg-amber-400 disabled:border-amber-400' : type == "basic" ? 'bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white border border-blue-500 hover:border-blue-400 active:border-blue-600 disabled:hover:bg-blue-400 disabled:bg-blue-400 disabled:border-blue-400' : ''} 
            
            ${color == 'danger' && type == "label" ? 'bg-red-100 hover:bg-red-500 active:bg-red-600 text-red-500 hover:text-white border border-red-100 hover:border-red-500 active:border-red-600 disabled:bg-red-50 disabled:border-red-50 disabled:text-red-300 disabled:hover:bg-red-50 disabled:hover:border-red-50 disabled:hover:text-red-300' : color == 'success' && type == "label" ? 'bg-green-100 hover:bg-green-500 active:bg-green-600 text-green-500 hover:text-white border border-green-100 hover:border-green-500 active:border-green-600 disabled:bg-green-50 disabled:border-green-50 disabled:text-green-300 disabled:hover:bg-green-50 disabled:hover:border-green-50 disabled:hover:text-green-300' : color == 'warning' && type == "label" ? 'bg-amber-100 hover:bg-amber-500 active:bg-amber-600 text-amber-500 hover:text-white border border-amber-100 hover:border-amber-500 active:border-amber-600 disabled:bg-amber-50 disabled:border-amber-50 disabled:text-amber-300 disabled:hover:bg-amber-50 disabled:hover:border-amber-50 disabled:hover:text-amber-300' : type == "label" ? 'bg-blue-100 hover:bg-blue-500 active:bg-blue-600 text-blue-500 hover:text-white border border-blue-100 hover:border-blue-500 active:border-blue-600 disabled:bg-blue-50 disabled:border-blue-50 disabled:text-blue-300 disabled:hover:bg-blue-50 disabled:hover:border-blue-50 disabled:hover:text-blue-300' : ''} 
            
            ${color == 'danger' && type == "outline" ? 'bg-white hover:bg-red-500 active:bg-red-600 text-red-500 hover:text-white border border-red-500 hover:border-red-400 active:border-red-600 disabled:border-red-300 disabled:text-red-300 disabled:hover:text-red-300 disabled:hover:bg-white' : color == 'success' && type == "outline" ? 'bg-white hover:bg-green-500 active:bg-green-600 text-green-500 hover:text-white border border-green-500 hover:border-green-400 active:border-green-600 disabled:border-green-300 disabled:text-green-300 disabled:hover:text-green-300 disabled:hover:bg-white' : color == 'warning' && type == "outline" ? 'bg-white hover:bg-amber-500 active:bg-amber-600 text-amber-500 hover:text-white border border-amber-500 hover:border-amber-400 active:border-amber-600 disabled:border-amber-300 disabled:text-amber-300 disabled:hover:text-amber-300 disabled:hover:bg-white' : type == "outline" ? 'bg-white hover:bg-blue-500 active:bg-blue-600 text-blue-500 hover:text-white border border-blue-500 hover:border-blue-400 active:border-blue-600 disabled:border-blue-300 disabled:text-blue-300 disabled:hover:text-blue-300 disabled:hover:bg-white' : ''}
           
            ${rounded ? 'rounded-full' : 'rounded-md'}
           
            ${size == 'xs' ? 'text-xs py-1 px-2' : size == 'sm' ? 'text-sm py-1 px-3' : size == 'lg' ? 'text-lg py-3 px-7' : size == 'xl' ? 'text-xl py-4 px-9' : 'py-2 px-5  text-base'}

            transition-all duration-300
            relative

            ${className}
        `.replaceAll('\n', '').trim()}
            disabled={disabled || loading}
            onClick={onClick}
            type={typeBtn}
        >
            {children}
            {loading && (
                <div className="absolute top-1/2 right-2 -translate-y-1/2">
                    <CircleSpinner size={size=='lg'?30:size=='xl'?35:size=='md'?20:size=='sm'?15:10} />
                </div>
            )}
        </button>
    )
}