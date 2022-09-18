import React from "react";
import { CommentsProps } from "./Comments.types";
import styles from "./Comments.module.css";
import { Title } from "../Title/Title";

export const Comments: React.FC<CommentsProps> = () => {
	return (
		<div className={styles.container}>
			<Title className={styles.title} tag="h2">
				Комментарии
			</Title>
		</div>
	);
};
