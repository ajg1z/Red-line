/* eslint-disable no-debugger */
import React, { Fragment } from "react";
import Top from "./components/Top/Top";
import { TopOptions } from "./constans";
import styles from "./Home.module.css";
import { HomeProps } from "./Home.types";
import { Bolder, Divider, Paragraph, Title, BookCard } from "../../components";
import cn from "classnames";
import { SortPeriod } from "./components/Top/Top.types";
import { FormWorks } from "../../global-constans";
import {
	getSortedPoemsByField,
	getSortedProsesByField,
} from "./helpers/books-sort-func";
import { motion } from "framer-motion";

const HomePage: React.FC<HomeProps> = ({ statistics, books }) => {
	const [proses, setProses] = React.useState(
		getSortedProsesByField(books, SortPeriod.Week)
	);
	const [poems, setPoems] = React.useState(
		getSortedPoemsByField(books, SortPeriod.Week)
	);

	const [notRatedPoems, setNotRatedPoems] = React.useState(() =>
		books
			.filter(
				(book) => book.formWork === FormWorks.Poem && book.weekRating === 0
			)
			.slice(0, 5)
	);
	const [notRatedProses, setNotRatedProses] = React.useState(() =>
		books
			.filter(
				(book) => book.formWork !== FormWorks.Poem && book.weekRating === 0
			)
			.slice(0, 5)
	);

	const handleSort = (typeSort: SortPeriod, typeProducts: FormWorks) => {
		if (typeProducts === FormWorks.Poem) {
			setPoems(getSortedPoemsByField(books, typeSort));
		} else setProses(getSortedProsesByField(books, typeSort));
	};

	return (
		<div className={styles.home}>
			<Title className={styles.mainTitle} tag="h1">
				YaPishu.net – сайт для писателей
			</Title>
			<Paragraph className={styles.text}>
				Вы увлекаетесь писательством и ищете, где можно{" "}
				<Bolder> разместить свои рассказы</Bolder>, стихи, романы, чтобы их
				читали, комментировали и оценивали?
			</Paragraph>
			<Paragraph className={styles.text}>
				Или вы ищете сайт, где можно <Bolder>написать книгу онлайн</Bolder> с
				главами или без них?
			</Paragraph>
			<Paragraph className={styles.text}>
				Тогда приглашаем вас к нам. У нас все бесплатно, и неважно, начинающий
				вы писатель или опытный, главное, чтобы вы любили свое дело! Здесь
				опубликованы произведения только участников сайта.
			</Paragraph>
			<Paragraph className={styles.text}>
				Больше информации о возможностях сайта на странице регистрации.
			</Paragraph>
			<Divider />
			<Paragraph>
				Зарегистрировано <Bolder>{statistics.users}</Bolder> человек,
				опубликовано
				<Bolder> {statistics.works} </Bolder>
				произведений, их прочитали <Bolder> {statistics.readed}</Bolder> раз, к
				ним оставлено <Bolder> {statistics.comments}</Bolder> комментариев.
			</Paragraph>
			<Divider />
			<Top
				sortAction={(type) => handleSort(type, FormWorks.Story)}
				title="Лучшая проза"
				sortTypes={TopOptions}
				sortLabel="за"
			/>
			<motion.div layout className={styles.tops}>
				{proses.map((prose, index) => {
					return (
						<Fragment key={prose.id}>
							{index !== 0 && <Divider margin={15} />}
							<BookCard
								formWork={prose.formWork}
								genres={prose.genres}
								id={prose.id}
								title={prose.title}
								img={prose.img}
								description={prose.description}
								tags={prose.tags}
								size="small"
							/>
						</Fragment>
					);
				})}
			</motion.div>

			<Top
				sortAction={(type) => handleSort(type, FormWorks.Poem)}
				title="Лучшие стихи"
				sortTypes={TopOptions}
				sortLabel={"за"}
			/>
			<motion.div layout className={styles.tops}>
				{poems.map((poem, index) => {
					return (
						<Fragment key={poem.id}>
							{index !== 0 && <Divider margin={15} />}
							<BookCard
								formWork={poem.formWork}
								genres={poem.genres}
								id={poem.id}
								title={poem.title}
								img={poem.img}
								description={poem.description}
								tags={poem.tags}
								size="small"
							/>
						</Fragment>
					);
				})}
			</motion.div>

			<Top
				title="Без оценок"
				description="Произведения, опубликованные более двух недель назад, но не получившие ни одной оценки. Давайте оценим их!"
			/>
			<div className={styles.notRated}>
				<div className={styles.poems}>
					{notRatedPoems.map((poem, index) => {
						return (
							<div key={poem.id}>
								{index !== 0 && <Divider margin={15} />}
								<BookCard
									formWork={poem.formWork}
									genres={poem.genres}
									id={poem.id}
									title={poem.title}
									img={poem.img}
									description={poem.description}
									tags={poem.tags}
									size="small"
								/>
							</div>
						);
					})}
				</div>
				<Divider
					margin={15}
					className={cn(styles.divider, styles.topsDivider)}
				/>
				<div className={styles.proses}>
					{notRatedProses.map((prose, index) => {
						return (
							<div key={prose.id}>
								{index !== 0 && <Divider margin={15} />}
								<BookCard
									formWork={prose.formWork}
									genres={prose.genres}
									id={prose.id}
									title={prose.title}
									img={prose.img}
									description={prose.description}
									tags={prose.tags}
									size="small"
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
