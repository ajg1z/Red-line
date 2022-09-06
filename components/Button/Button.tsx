import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.types";
import cn from "classnames";

const Button: React.FC<ButtonProps> = ({
	className,
	variant = "outlined",
	children,
	...args
}) => {
	return (
		<button
			{...args}
			className={cn(className, styles.button, {
				[styles.outlined]: variant === "outlined",
				[styles.fill]: variant === "fill",
			})}
		>
			{children}
		</button>
	);
};

export default Button;
