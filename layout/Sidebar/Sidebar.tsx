import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.types";
import cn from "classnames";
import { BookCard, Title } from "../../components";
import { AppContext } from "../../contexts/app-context";
import { Comment } from "./components/comment/comment";

export const Sidebar: React.FC<SidebarProps> = ({ className, ...args }) => {
	const { lastComments, promotedBooks } = useContext(AppContext);

	return (
		<aside {...args} className={cn(styles.sidebar, className)}>
			<Title className={styles.title} tag="h3">
				Продвигаемые книги
			</Title>
			{promotedBooks.map((book) => {
				return (
					<BookCard
						className={styles.bookItem}
						key={book.id}
						formWork={book.formWork}
						genres={book.genres}
						id={book.id}
						title={book.title}
						img={book.img}
						description={book.description}
						tags={book.tags}
						size="small"
					/>
				);
			})}
			<Title className={styles.title} tag="h3">
				Последние комментарии
			</Title>
			{lastComments.map((comment) => {
				return (
					<Comment className={styles.comment} key={comment.id} {...comment} />
				);
			})}
		</aside>
	);
};
