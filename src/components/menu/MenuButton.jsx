import React from "react"
import Button from "../button/Button"
import { ToggleContext } from "./Menu"

export default function MenuButton({ children }) {
    const {open, toggle, menuId} = React.useContext(ToggleContext)

    return (
        <Button onClick={toggle} aria-expanded={open} aria-haspopup="true" aria-controls={menuId} >{children}</Button>
    )
}