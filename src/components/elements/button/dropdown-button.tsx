import useOutsideComponent from "@utils/useOutsideComponent";
import { ReactNode, useEffect, useRef, useState } from "react";


interface IProps {
    button: ReactNode,
    dropdownContent: ReactNode
}

// function useOutsideAlerter(ref) {
//     useEffect(() => {
//         /**
//          * Alert if clicked on outside of element
//          */
//         function handleClickOutside(event) {
//             if (ref.current && !ref.current.contains(event.target)) {
//                 alert("You clicked outside of me!");
//             }
//         }

//         // Bind the event listener
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             // Unbind the event listener on clean up
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [ref]);
// }



export default function DropdownButton({button, dropdownContent}: IProps) {

    const [clicked, setClicked] = useState(false)

    const componentRef = useRef<HTMLDivElement>()
    useOutsideComponent(componentRef, () => setClicked(false))

   

    return (
        <div ref={componentRef} className="relative">
            <a role="button" onClick={()=>setClicked(!clicked)}>
                {button}
            </a>

            <div className={`absolute top-full right-0 transiton-all duration-300 ${clicked?"opacity-1 visible translate-y-1":"translate-y-5 invisible opacity-0"}`}>
                {dropdownContent}   
            </div>
        </div>
    )
}