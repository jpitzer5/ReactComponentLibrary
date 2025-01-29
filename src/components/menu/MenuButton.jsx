import React from "react"
import Button from "../button/Button"

export default function MenuButton({ children, onClick }) {
    return (
        <Button onClick={onClick}>{children}</Button>
    )
}