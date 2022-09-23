import React, { ForwardedRef } from "react";
import { InputProps } from "./Input.types";
import styles from "./Input.module.css";
import cn from "classnames";

export const Input = React.forwardRef(
	(
		{ className, label, labelClass, error, ...args }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		return (
			<div className={styles.container}>
				{label && (
					<label className={cn(styles.label, labelClass)}>{label}</label>
				)}
				<input
					ref={ref}
					className={cn(className, styles.input, { [styles.error]: !!error })}
					{...args}
				/>
			</div>
		);
	}
);
