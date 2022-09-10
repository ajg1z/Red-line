import cn from "classnames";
import React, { ForwardedRef } from "react";
import { DefaultParams, Pages } from "../../global-constans";
import { isProse } from "../../helpers/functions";
import { Paragraph } from "../Paragraph/Paragraph";
import styles from "./BookCard.module.css";
import { BookCardProps } from "./BookCard.types";
import { Link } from "../Link/Link";

const { defaultImage, domainUrl } = DefaultParams;

export const BookCard = React.forwardRef(
	(
		{
			genres,
			title,
			img,
			tags,
			description,
			size = "normal",
			author,
			id,
			formWork,
			className,
			...args
		}: BookCardProps,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		return (
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
					<Link className={styles.title} href={`/${id}`}>
						{title}
					</Link>
					{author && <p className={styles.author}>{author}</p>}
					<ul className={styles.genres}>
						<li className={cn(styles.formWork, styles.genre)}>
							<Link
								href={{
									href: isProse(formWork) ? Pages.Prose : Pages.Poem,
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
											href: isProse(formWork) ? Pages.Prose : Pages.Poem,
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
					{tags && tags.length && (
						<div className={styles.tagBlock}>
							<p>Теги:</p>
							<ul className={styles.tags}>
								{tags.map((tag) => {
									return (
										<li key={tag} className={styles.tag}>
											<Link
												href={{
													href: isProse(formWork) ? Pages.Prose : Pages.Poem,
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
		);
	}
);
