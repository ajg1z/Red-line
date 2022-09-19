import React from "react";
import { Button, Paragraph, Tag, Title } from "../../../../components";
import { TagColors } from "../../../../components/Tag/Tag.types";
import styles from "./Description.module.css";
import { DescriptionProps } from "./Description.types";

const Description: React.FC<DescriptionProps> = ({
	createdAt,
	description,
	genres,
	isComplete,
	name,
	rating,
	tags,
	formWork,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<Title className={styles.title} tag="h1">
					{name}
				</Title>
				<Button variant="fill" className={styles.read}>
					Читать
				</Button>
			</div>
			<div className={styles.genres}>
				<span>Жанры: {formWork}</span> /
				<ul className={styles.genresList}>
					{genres.map((genre) => {
						return (
							<li className={styles.genre} key={genre}>
								{genre}
							</li>
						);
					})}
				</ul>
			</div>
			<Paragraph className={styles.description}>
				{description ?? "Аннотация отсутствует"}
			</Paragraph>
			{tags && (
				<div className={styles.tags}>
					<span>Теги: </span>
					<ul className={styles.tagList}>
						{tags.map((tag) => {
							return (
								<li className={styles.tag} key={tag}>
									{tag}
								</li>
							);
						})}
					</ul>
				</div>
			)}

			<Tag bgColor={TagColors.Black}>
				{isComplete ? "завершенное произведение" : "незавершенное произведение"}
			</Tag>
		</div>
	);
};

export default Description;
