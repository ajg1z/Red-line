import React, { ForwardedRef } from "react";
import { Link, Paragraph } from "../../../../components";
import { Pages } from "../../../../global-constans";
import styles from "./comment.module.css";
import { CommentProps } from "./comment.types";
import cn from "classnames";

export const Comment = React.forwardRef(
	(
		{ author, body, product, className, ...args }: CommentProps,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		return (
			<div ref={ref} className={cn(styles.container, className)} {...args}>
				<Link className={styles.author} href={`/${Pages.Users}/${author.id}`}>
					{author.name} →
				</Link>
				<Link className={styles.product} href={`/${Pages.Book}/${product.id}`}>
					{product.name}
				</Link>
				<Paragraph className={styles.text}>{body}</Paragraph>
			</div>
		);
	}
);
