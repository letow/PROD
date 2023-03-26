import { InputHTMLAttributes, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import s from "./Input.module.scss";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    autoFocus?: boolean;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        type,
        placeholder,
        autoFocus,
        onChange,
        ...otherProps
    } = props;

    const onChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(s.Input, {}, [className])}>
            {placeholder && <div>{placeholder}</div>}
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                autoFocus={autoFocus}
                {...otherProps}
            />
        </div>
    );
});
