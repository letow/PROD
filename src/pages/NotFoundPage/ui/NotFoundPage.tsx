import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import s from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation("404");
  return (
    <div className={classNames(s.NotFoundPage, {}, [className])}>
      {t("Не найдено")}
    </div>
  );
};
