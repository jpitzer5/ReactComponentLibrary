import React from "react"
import "./menu.css"

const ToggleContext = React.createContext()

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(false)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <ToggleContext.Provider value={{open, toggle}}>
            <div className="menu">
                {children}
            </div>
        </ToggleContext.Provider>
    )
}

export {ToggleContext}