import { useTheme } from "app/providers/ThemeProvider";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "widgets/Portal/Portal";
import s from "./Modal.module.scss";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose } = props;

    const [isClosing, setIsClosing] = useState(false);
    const { theme } = useTheme();
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeHandler();
            }
        },
        [closeHandler]
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [s.opened]: isOpen,
        [s.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(s.Modal, mods, [className, theme])}>
                <div className={s.overlay} onClick={closeHandler}>
                    <div className={s.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
