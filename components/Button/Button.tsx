import React, { ForwardedRef } from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.types";
import cn from "classnames";

const Button = React.forwardRef(
	(
		{ className, variant = "outlined", children, ...args }: ButtonProps,
		ref: ForwardedRef<HTMLButtonElement>
	) => {
		return (
			<button
				{...args}
				ref={ref}
				className={cn(className, styles.button, {
					[styles.outlined]: variant === "outlined",
					[styles.fill]: variant === "fill",
				})}
			>
				{children}
			</button>
		);
	}
);

export default Button;
