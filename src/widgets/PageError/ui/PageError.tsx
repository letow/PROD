import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import s from "./PageError.module.scss";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(s.PageError, {}, [className])}>
            <h1>{t("Ошибка")}</h1>
            <span></span>
            <Button theme={ThemeButton.CLEAR} onClick={reloadPage}>
                {t("Обновить")}
            </Button>
        </div>
    );
};
