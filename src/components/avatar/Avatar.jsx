import React from "react"
import { IoPersonSharp } from "react-icons/io5"
import "./avatar.css"

const colors = ["navy", "pink", "red", "blue", "green"]

function getRandColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

export default function Avatar(props) {
    let child = <IoPersonSharp />
    let classes = `avatar avatar-icon ${getRandColor()}`
    if (props.src) {
        child = <img src={props.src} alt={props.alt ? props.alt : "profile picture"} />
        classes = `avatar`
    } else if (props.children) {
        child = props.children
        classes = `avatar avatar-letters ${getRandColor()}`
    }
    
    
    return (
        <div className={classes}>
            {child}
        </div>
    )
}