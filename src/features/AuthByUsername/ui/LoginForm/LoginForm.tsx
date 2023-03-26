import { classNames } from "shared/lib/classNames/classNames";
import s from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(s.LoginForm, {}, [className])}>
            <Input type="text" placeholder={t("Логин")} autoFocus />
            <Input type="password" placeholder={t("Пароль")} />
            <Button className={s.loginBtn}>{t("Войти")}</Button>
        </div>
    );
};
