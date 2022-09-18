import React from "react";
import {
	BookCard,
	Button,
	Divider,
	Paragraph,
	Title,
} from "../../../../../components";
import styles from "./Cabinet.module.css";
import { CabinetProps } from "./Cabinet.types";

const Cabinet: React.FC<CabinetProps> = ({ books }) => {
	return (
		<>
			<div className={styles.top}>
				<Title tag="h2">Мои произведения</Title>
				<Button className={styles.addBook} variant="fill">
					Добавить
				</Button>
			</div>
			<div>
				{!books.length && (
					<Paragraph>
						Пока ничего нет. Именно здесь происходит написание и публикация
						произведений. Чтобы добавить произведение нажмите на кнопку
						«Добавить».
					</Paragraph>
				)}
				{books.map((book, index) => {
					return (
						<>
							{index !== 0 && <Divider margin={15} />}
							<BookCard edit showStatus {...book} key={book.id} />
						</>
					);
				})}
			</div>
		</>
	);
};

export default Cabinet;
