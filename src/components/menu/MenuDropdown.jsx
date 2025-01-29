import React from "react"
import { ToggleContext } from "./Menu"

export default function MenuDropdown({ children }) {
    const {open, toggle} = React.useContext(ToggleContext)
    return open ? (
        <div className="menu-dropdown">
            {children}
        </div>
    ) : null
}