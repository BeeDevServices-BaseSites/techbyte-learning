import React from "react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToButton = () => {

    const [ back_to_top_button, set_back_to_top_button ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 250){
                set_back_to_top_button(true);
            } else {
                set_back_to_top_button(false);
            }
        })
    }, [])

    const scroll_up = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {back_to_top_button && (
                <button onClick={ scroll_up } className="go_top_button"><FaArrowUp /></button>
            )}
        </>
    )
}

export default GoToButton;