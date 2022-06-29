import React from "react";
import "../Css/SideNav.css";


const SideLinks = ({ linkTitle, active }) => {
    return (
        <li className={`link ${active}`}>
            <a href="">{linkTitle}</a>
        </li>
    )
}

export default SideLinks;