import React from "react";
import styles from "./Bolder.module.css";
import { BolderProps } from "./Bolder.types";
import cn from "classnames";

export const Bolder: React.FC<BolderProps> = ({
	className,
	children,
	...args
}) => {
	return (
		<span className={cn(styles.bolder, className)} {...args}>
			{children}
		</span>
	);
};
