import './button.css'
import clsx from 'clsx'

export default function Button({children, size, className, ...rest}) {

    const classes = clsx(className, size && `button-${size}`)

    return (
        <button className={classes} {...rest}>{children}</button>
    )
}