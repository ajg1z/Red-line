import React from "react";
import { CommentsProps } from "./Comments.types";
import styles from "./Comments.module.css";
import { Title } from "../Title/Title";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import Comment from "../Comment/Comment";
import { Divider } from "../Divider/Divider";

export const Comments: React.FC<CommentsProps> = ({ author, comments, id }) => {
	return (
		<div className={styles.container}>
			<Title className={styles.title} tag="h2">
				Комментарии
			</Title>
			<Textarea className={styles.input} />
			<Button variant="fill" className={styles.sendBtn}>
				Отправить
			</Button>
			<div className={styles.comments}>
				{comments.map((comment) => {
					return (
						<>
							<Divider />
							<Comment key={comment.id} {...comment} />
						</>
					);
				})}
			</div>
		</div>
	);
};
