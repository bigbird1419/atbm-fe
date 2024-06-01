import { Link } from "react-router-dom";

export default function Button({
    to,
    href,
    primary = false,
    secondary = false,
    normal = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    adminBtn = false,
    children,
    className,
    style,
    onClick = () => { },
    ...passProps
}) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }

    if (disabled) {
        // delete props.onClick;
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        Comp = Link
        props.to = to
    } else if (href) {
        Comp = 'a'
        props.href = href
    }

    return (
        <Comp className={className} {...props} style={style}>
            <span>{children}</span>
        </Comp>
    )
}