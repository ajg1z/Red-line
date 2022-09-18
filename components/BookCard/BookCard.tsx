import cn from "classnames";
import React, { ForwardedRef } from "react";
import { Pages } from "../../global-constans";
import { Paragraph } from "../Paragraph/Paragraph";
import styles from "./BookCard.module.css";
import { BookCardProps } from "./BookCard.types";
import { Link } from "../Link/Link";
import { Tag } from "../Tag/Tag";
import { TagColors } from "../Tag/Tag.types";
import { Button } from "../Button/Button";

export const BookCard = React.forwardRef(
	(
		{
			genres,
			name,
			img,
			tags,
			description,
			size = "normal",
			author,
			id,
			formWork,
			allTimeRating,
			isPublished,
			show,
			createdAt,
			isComplete,
			adultContent,
			showStatus,
			edit,
			className,
			...args
		}: BookCardProps,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		return (
			<>
				<div
					ref={ref}
					className={cn(styles.container, className, {
						[styles.smallSize]: size === "small",
					})}
					{...args}
				>
					{/* <Image src={domainUrl + (img || defaultImage)} /> */}
					<div className={styles.mockImage}></div>
					<div className={styles.content}>
						<Link className={styles.title} href={`${Pages.Books}/${id}`}>
							{name}
							{adultContent && <Tag bgColor={TagColors.Red}>18+</Tag>}
							{edit && (
								<Tag bgColor={show ? TagColors.Green : TagColors.Orange}>
									{show ? "опубликовано" : "скрыто"}
								</Tag>
							)}
						</Link>
						{author && (
							<Link
								href={`/${Pages.Users}/${author.id}`}
								className={styles.author}
							>
								{author.name}
							</Link>
						)}
						<ul className={styles.genres}>
							<li className={cn(styles.formWork, styles.genre)}>
								<Link
									href={{
										href: Pages.Books,
										query: {
											formWork,
										},
									}}
								>
									{formWork}
								</Link>
							</li>
							/
							{genres.map((genre) => {
								return (
									<li key={genre} className={styles.genre}>
										<Link
											href={{
												href: Pages.Books,
												query: {
													category: genre,
												},
											}}
										>
											{genre}
										</Link>
									</li>
								);
							})}
						</ul>
						<Paragraph className={styles.description}>
							{description ? description : "Аннотация отсутствует"}
						</Paragraph>
						{showStatus && (
							<Paragraph className={styles.status}>
								Статус:
								{show
									? " незавершенное произведение"
									: " завершенное произведение"}
							</Paragraph>
						)}
						{tags && tags.length && (
							<div className={styles.tagBlock}>
								<p>Теги:</p>
								<ul className={styles.tags}>
									{tags.map((tag) => {
										return (
											<li key={tag} className={styles.tag}>
												<Link
													href={{
														href: Pages.Books,
														query: {
															tag,
														},
													}}
												>
													{tag}
												</Link>
											</li>
										);
									})}
								</ul>
							</div>
						)}
					</div>
				</div>
				{edit && (
					<div className={styles.action}>
						<button>Отобразить</button>
						<button>Редактировать</button>
						<button>Текст</button>
						<button>Скачать</button>
					</div>
				)}
			</>
		);
	}
);
