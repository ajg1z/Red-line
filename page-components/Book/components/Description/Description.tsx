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
				<Title tag="h1">{name}</Title>
				<Button variant="fill" className={styles.read}>
					Читать
				</Button>
			</div>
			<Paragraph className={styles.genres}>
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
			</Paragraph>
			<Paragraph className={styles.description}>
				{description ?? "Аннотация отсутствует"}
			</Paragraph>
			{tags && (
				<Paragraph className={styles.tags}>
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
				</Paragraph>
			)}

			<Tag bgColor={TagColors.Black}>
				{isComplete ? "завершенное произведение" : "незавершенное произведение"}
			</Tag>
		</div>
	);
};

export default Description;
