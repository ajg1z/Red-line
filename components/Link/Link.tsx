import React from "react";
import { LinkProps } from "./Link.types";
import LinkNext from "next/link";
import cn from "classnames";
import styles from "./Link.module.css";

export const Link: React.FC<LinkProps> = ({
	className,
	children,
	href,
	...args
}) => {
	return (
		<LinkNext href={href}>
			<a className={cn(styles.link, className)} {...args}>
				{children}
			</a>
		</LinkNext>
	);
};
