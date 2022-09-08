import cn from "classnames";
import React from "react";
import styles from "./Title.module.css";
import { TitleProps } from "./Title.types";

const Title: React.FC<TitleProps> = ({ className, children, tag, ...args }) => {
	switch (tag) {
		case "h1":
			return (
				<h1 className={cn(styles.title, styles.h1, className)} {...args}>
					{children}
				</h1>
			);
		case "h2":
			return (
				<h2 className={cn(styles.title, styles.h2, className)} {...args}>
					{children}
				</h2>
			);
		case "h3":
			return (
				<h3 className={cn(styles.title, styles.h3, className)} {...args}>
					{children}
				</h3>
			);
		default:
			return <></>;
	}
};

export default Title;
