import React from "react"
import Button from "../button/Button"
import { ToggleContext } from "./Menu"

export default function MenuButton({ children }) {
    const {open, toggle} = React.useContext(ToggleContext)

    return (
        <Button onClick={toggle}>{children}</Button>
    )
}