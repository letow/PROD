import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import s from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(s.Navbar, {}, [className])}>
      <div></div>
      <div className={s.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
          {t("Главная")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          {t("О сайте")}
        </AppLink>
      </div>
    </div>
  );
};
