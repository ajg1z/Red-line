import React from "react";
import { InputProps } from "./Input.types";
import styles from "./Input.module.css";
import cn from "classnames";

const Input: React.FC<InputProps> = ({
	className,
	label,
	labelClass,
	...args
}) => {
	return (
		<div className={styles.container}>
			{label && <label className={cn(styles.label, labelClass)}>{label}</label>}
			<input className={cn(className, styles.input)} {...args} />
		</div>
	);
};

export default Input;
