import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import s from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={toggle}>TOGGLE</button>
      <div className={s.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
