import React from "react";
import { TagColors, TagProps } from "./Tag.types";
import cn from "classnames";
import styles from "./Tag.module.css";

export const Tag: React.FC<TagProps> = ({
	bgColor,
	className,
	children,
	...args
}) => {
	return (
		<div
			className={cn(styles.container, className, {
				[styles.red]: bgColor === TagColors.Red,
				[styles.green]: bgColor === TagColors.Green,
				[styles.orange]: bgColor === TagColors.Orange,
				[styles.black]: bgColor === TagColors.Black,
			})}
			{...args}
		>
			{children}
		</div>
	);
};
