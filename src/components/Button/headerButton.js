import React from "react";
import Icon from "../Icon";
import { Link } from "react-router-dom";

export default function HeaderButton ({link,icon,title, onClick}) {
    return <div>
        <button className="mx-3 " onClick={onClick} >
<Link to={link}>
<div className="flex items-center space-x-2">
 <Icon name={icon} Size="1.2rem" color="white"/>
<p>{title}</p>
 </div>
</Link>
</button>
    </div>
}