import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { ForwardedRef } from "react";
import { DefaultParams, FormWorks, Pages } from "../../global-constans";
import { isProse } from "../../helpers/functions";
import Paragraph from "../Paragraph/Paragraph";
import Title from "../Title/Title";
import styles from "./BookCard.module.css";
import { BookCardProps } from "./BookCard.types";

const { defaultImage, domainUrl } = DefaultParams;

const BookCard = React.forwardRef(
	(
		{
			genres,
			title,
			img,
			tags,
			description,
			size,
			author,
			id,
			formWork,
			className,
			...args
		}: BookCardProps,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		return (
			<div ref={ref} className={cn(styles.container, className)} {...args}>
				{/* <Image src={domainUrl + (img || defaultImage)} /> */}
				<div className={styles.mockImage}></div>
				<div className={styles.content}>
					<Link href={id}>
						<a className={styles.title}>{title}</a>
					</Link>
					{author && <p className={styles.author}>{author}</p>}
					<ul className={styles.genres}>
						<li className={styles.formWork}>{formWork}</li>
						{genres.map((genre) => {
							return <li className={styles.genre}>{genre}</li>;
						})}
					</ul>
					{description && (
						<Paragraph className={styles.description}>{description}</Paragraph>
					)}
					{tags && tags.length && (
						<div className={styles.tagBlock}>
							<p>Теги:</p>
							<ul className={styles.tags}>
								{tags.map((tag) => {
									return (
										<li className={styles.tag}>
											<Link
												href={{
													href: isProse(formWork) ? Pages.Prose : Pages.Poem,
												}}
											>
												<a>{tag}</a>
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

export default BookCard;
