import React from "react"
import "./menu.css"

const ToggleContext = React.createContext()

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(false)
    const menuId = React.useId()

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <ToggleContext.Provider value={{open, toggle, menuId}}>
            <div className="menu" role="menu">
                {children}
            </div>
        </ToggleContext.Provider>
    )
}

export {ToggleContext}