import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import s from "./AppLink.module.scss";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    RED = "red",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        children,
        className,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(s.AppLink, {}, [className, s[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
