import React from "react";
import Bolder from "../../components/Bolder/Bolder";
import BookCard from "../../components/BookCard/BookCard";
import Divider from "../../components/Divider/Divider";
import Paragraph from "../../components/Paragraph/Paragraph";
import Title from "../../components/Title/Title";
import Top from "./components/Top/Top";
import { TopOptions } from "./constans";
import styles from "./Home.module.css";
import { HomeProps } from "./Home.types";

const HomePage: React.FC<HomeProps> = ({ statistics, topProses }) => {
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
				Зарегистрировано <Bolder>72200</Bolder> человек, опубликовано
				<Bolder> 344155 </Bolder>
				произведений, их прочитали <Bolder> 53102639</Bolder> раз, к ним
				оставлено <Bolder> 853403</Bolder> комментариев.
			</Paragraph>
			<Divider />
			<Top
				title="Лучшая проза"
				sortTypes={TopOptions}
				sortLabel="за последние"
			/>
			{topProses &&
				topProses.length &&
				topProses.map((prose) => {
					return (
						<BookCard
							author={prose.author}
							formWork={prose.formWork}
							genres={prose.genres}
							id={prose.id}
							title={prose.title}
							img={prose.img}
							description={prose.description}
							tags={prose.tags}
							size="small"
						/>
					);
				})}
		</div>
	);
};

export default HomePage;
