import React from "react";
import { Pages } from "../../global-constans";
import { Link } from "../Link/Link";
import { Paragraph } from "../Paragraph/Paragraph";
import styles from "./PersonCard.module.css";
import { PersonProps } from "./PersonCard.types";

export const PersonCard: React.FC<PersonProps> = ({
	className,
	info,
	avatar,
	name,
	rating,
	createdAt,
	id,
	...args
}) => {
	return (
		<div className={styles.container} {...args}>
			<div className={styles.mockImage}></div>
			<div className={styles.content}>
				<div className={styles.top}>
					<Link className={styles.name} href={Pages.Users + `/${id}`}>
						{name}
					</Link>
					<p className={styles.rating}>Баллы {rating}</p>
				</div>
				<Paragraph className={styles.option}>
					Регистрация: {createdAt}
				</Paragraph>
				<Paragraph className={styles.option}>
					Пишу с: {info.beginWrite}
				</Paragraph>
				<Paragraph className={styles.option}>
					Возраст: {info.age || "не указан"}
				</Paragraph>
				<Paragraph className={styles.option}>
					О себе: {info.description || "не указан"}
				</Paragraph>
				<Paragraph className={styles.option}>
					Город: {info.city || "не указан"}
				</Paragraph>
				<Paragraph className={styles.option}>
					Предпочитаемые жанры: {info.preferGenres || "не указан"}
				</Paragraph>
			</div>
		</div>
	);
};
