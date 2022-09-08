import React, { ForwardedRef } from "react";
import { InputProps } from "./Input.types";
import styles from "./Input.module.css";
import cn from "classnames";

const Input = React.forwardRef(
	(
		{ className, label, labelClass, ...args }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		return (
			<div className={styles.container}>
				{label && (
					<label className={cn(styles.label, labelClass)}>{label}</label>
				)}
				<input ref={ref} className={cn(className, styles.input)} {...args} />
			</div>
		);
	}
);

export default Input;
