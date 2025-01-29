import React from "react"
import { ToggleContext } from "./Menu"

export default function MenuDropdown({ children }) {
    const {open, menuId} = React.useContext(ToggleContext)
    return open ? (
        <div className="menu-dropdown" id={menuId}>
            {children}
        </div>
    ) : null
}