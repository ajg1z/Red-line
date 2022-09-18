import cn from "classnames";
import React from "react";
import { BlogCardProps } from "./BlogCard.types";
import styles from "./BlogCard.module.css";
import { Link } from "../Link/Link";
import { Pages } from "../../global-constans";
import { Paragraph } from "../Paragraph/Paragraph";

export const BlogCard: React.FC<BlogCardProps> = ({
	body,
	createdAt,
	title,
	id,
	className,
	...args
}) => {
	return (
		<div className={cn(styles.container, className)} {...args}>
			<Link className={styles.title} href={`/${Pages.Books}/${id}`}>
				{title}
			</Link>
			<Paragraph className={styles.body}>
				<span className={styles.text}>{body}</span>
				<span className={styles.createdAt}>{createdAt}</span>
			</Paragraph>
		</div>
	);
};
