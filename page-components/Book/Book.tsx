import cn from "classnames";
import React from "react";
import { BookProps, ContentBook } from "./Book.types";
import styles from "./Book.module.css";
import Description from "./components/Description";
import { useRouter } from "next/router";
import { Pages } from "../../global-constans";
import { Button, Comments, Link } from "../../components";

const Book: React.FC<BookProps> = ({ book, commentsBooks, user }) => {
	const [typeContent, setTypeContent] = React.useState<ContentBook>(
		ContentBook.Description
	);
	const router = useRouter();

	const reducerContent = React.useMemo(() => {
		if (typeContent === ContentBook.Description)
			return (
				<Description
					genres={book.genres}
					isComplete={book.isComplete}
					name={book.name}
					rating={book.allTimeRating}
					tags={book.tags}
					createdAt={book.createdAt}
					description={book.description}
					formWork={book.formWork}
				/>
			);
	}, [typeContent, router]);

	return (
		<div className={styles.container}>
			<div className={styles.body}>{reducerContent}</div>
			<div className={styles.actionPanel}>
				<div className={styles.actionTop}>
					<Link
						className={styles.name}
						href={`${Pages.Users}/${book.author.id}`}
					>
						Автор: {book.author.name}
					</Link>
					<p className={styles.viewers}>Просмотров: {book.viewers || 0}</p>
					<p className={styles.countComments}>оценок нет</p>
				</div>
				<div className={styles.actionFooter}>
					<Button variant="fill">Действие</Button>
					<Button variant="fill">Оценить</Button>
					<p className={styles.createdAt}>Опубликовано: {book.createdAt}</p>
				</div>
			</div>
			<Comments id={book.id} author={user} comments={commentsBooks} />
		</div>
	);
};

export default Book;
