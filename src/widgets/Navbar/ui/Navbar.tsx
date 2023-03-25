import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Modal } from "widgets/Modal";
import s from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            <div></div>
            <div className={s.links}>
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    onClick={onToggleModal}
                    className={s.links_item}
                >
                    {t("Войти")}
                </Button>
            </div>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis earum error vitae repellat inventore quis deserunt
                accusamus! In, cupiditate hic a, nesciunt laborum dolore labore
                consequuntur consequatur earum explicabo ipsa placeat enim.
                Perferendis hic dolore placeat rem sunt explicabo distinctio
                neque nostrum reprehenderit, harum quae cupiditate sit tenetur
                tempora delectus cum vitae nam dolorum eum voluptatum facere
                iusto! Pariatur ullam, dolorum nemo amet consectetur blanditiis
                debitis illum explicabo nisi, tempore modi maxime adipisci
                suscipit, omnis maiores inventore distinctio molestiae labore
                beatae nulla reprehenderit. Ex voluptas cumque voluptate quo
                illo dignissimos molestiae, quia, esse harum ipsum doloremque
                enim quos adipisci laudantium?
            </Modal>
        </div>
    );
};
