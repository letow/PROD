import { LoginModal } from "features/AuthByUsername/ui/LoginModal/LoginModal";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import s from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            <div />
            <div className={s.links}>
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    onClick={onShowModal}
                    className={s.links_item}
                >
                    {t("Войти")}
                </Button>
            </div>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
