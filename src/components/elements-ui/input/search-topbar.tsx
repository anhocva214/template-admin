
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { settingActions, settingSelector } from "src/redux/setting.redux"


export default function SearchTopbar() {
    const dispatch = useDispatch()
    const {searchToggle} = useSelector(settingSelector)
    
    return (
        <div className={`absolute h-full w-full bg-white z-10 px-5 flex justify-between items-center transition-all duration-300 ${!searchToggle?'-top-[100%]':'top-0'}`}>
            <div>
                <i className="fa-regular fa-magnifying-glass text-slate-500 text-lg"></i>
                <input type="text" className="border-0 focus:border-0 focus:outline-0 ml-2 p-2 w-1/2 text-slate-700 text-sm" placeholder="Searching..." />
            </div>
            <div>
                <a role="button" onClick={()=> { dispatch(settingActions.switchSearchToggle(false)) }} className="hover:bg-gray-300 p-4 rounded-full w-9 h-9 flex justify-center items-center transition-all duration-300">
                    <i className="fa-regular text-lg text-slate-500 fa-xmark"></i>
                </a>
            </div>
        </div>
    )
} 