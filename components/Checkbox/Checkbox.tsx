import React from "react";
import { CheckboxProps } from "./Checkbox.types";
import styles from "./Checkbox.module.css";
import cn from "classnames";
import { Keys } from "../../global-constans";

export const Checkbox: React.FC<CheckboxProps> = ({
	className,
	label,
	...args
}) => {
	const inputRef = React.useRef<HTMLInputElement | null>(null);

	const handleKeyDown = (key: React.KeyboardEvent) => {
		if (key.code === Keys.Space || key.code === Keys.Enter) {
			if (inputRef.current) inputRef.current?.click();
			key.preventDefault();
		}
	};

	React.useEffect(() => {
		console.log(inputRef.current?.checked);
	}, [inputRef.current?.checked]);

	return (
		<label className={cn(styles.container, className)}>
			<input
				ref={inputRef}
				className={styles.input}
				type="checkbox"
				{...args}
			/>
			<span className={styles.check}>
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
