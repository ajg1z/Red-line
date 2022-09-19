import React from "react";
import { CommentProps } from "./Comment.types";
import styles from "./Comment.module.css";
import { Link } from "../Link/Link";
import { Pages } from "../../global-constans";

const Comment: React.FC<CommentProps> = ({
	author,
	body,
	createdAt,
	id,
	product,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.mockImage}></div>
			<div className={styles.content}>
				<div className={styles.top}>
					<Link href={`${Pages.Users}/${author.id}`} className={styles.title}>
						{author.name}
					</Link>
					<p className={styles.createdAt}>{createdAt}</p>
				</div>
				<div className={styles.body}>{body}</div>
				<div className={styles.action}>
					<button>ответить</button>
					<button>жалоба</button>
				</div>
			</div>
		</div>
	);
};

export default Comment;
