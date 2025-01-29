import './button.css'
import clsx from 'clsx'

export default function Button({children, size, className, variant, ...rest}) {

    const classes = clsx(className, size && `button-${size}`, variant)

    return (
        <button className={classes} {...rest}>{children}</button>
    )
}