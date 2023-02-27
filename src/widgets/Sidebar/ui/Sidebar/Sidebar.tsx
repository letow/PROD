import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/RouteConfig/RouteConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import s from "./Sidebar.module.scss";
import MainIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/info.svg";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [
        className,
      ])}
      data-testid="sidebar"
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={toggle}
        className={s.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={SizeButton.L}
        square
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={s.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={s.item}
        >
          <MainIcon className={s.icon} />
          <span className={s.link}>{t("Главная")}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={s.item}
        >
          <AboutIcon className={s.icon} />
          <span className={s.link}>{t("О сайте")}</span>
        </AppLink>
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
