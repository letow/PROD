import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            <div></div>
            <div className={s.links}>*</div>
        </div>
    );
};
