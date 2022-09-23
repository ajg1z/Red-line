import React from "react";
import { CheckboxProps } from "./Checkbox.types";
import styles from "./Checkbox.module.css";
import cn from "classnames";
import { Keys } from "../../global-constans";

export const Checkbox: React.FC<CheckboxProps> = ({
	className,
	label,
	size = "middle",
	error,
	...args
}) => {
	const inputRef = React.useRef<HTMLInputElement | null>(null);

	const handleKeyDown = (key: React.KeyboardEvent) => {
		if (key.code === Keys.Space || key.code === Keys.Enter) {
			if (inputRef.current) inputRef.current?.click();
			key.preventDefault();
		}
	};

	return (
		<label className={cn(styles.container, className)}>
			<input
				ref={inputRef}
				className={styles.input}
				type="checkbox"
				{...args}
			/>
			<span
				className={cn(styles.check, {
					[styles.smallCheck]: size == "small",
					[styles.middleCheck]: size === "middle",
					[styles.error]: !!error,
				})}
			>
				<span
					className={cn(styles.checked, {
						[styles.active]: inputRef.current?.checked,
					})}
				/>
			</span>
			<span tabIndex={0} onKeyDown={handleKeyDown} className={styles.text}>
				{label}
			</span>
		</label>
	);
};
