import React, { Fragment } from "react";
import Top from "./components/Top/Top";
import { TopOptions } from "./constans";
import styles from "./Home.module.css";
import { HomeProps } from "./Home.types";
import {
	Bolder,
	Button,
	Divider,
	Paragraph,
	Title,
	BookCard,
} from "../../components";
import cn from "classnames";

const HomePage: React.FC<HomeProps> = ({
	statistics,
	topProses,
	topPoem,
	notRated,
}) => {
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
			<Top title="Лучшая проза" sortTypes={TopOptions} sortLabel="за" />
			{topProses.map((prose, index) => {
				return (
					<div key={prose.id} className={styles.tops}>
						{index !== 0 && <Divider margin={15} className={styles.divider} />}
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

			<Top title="Лучшие стихи" sortTypes={TopOptions} sortLabel={"за"} />
			{topPoem.map((poem, index) => {
				return (
					<div key={poem.id} className={styles.tops}>
						{index !== 0 && <Divider margin={15} className={styles.divider} />}
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

			<Top
				title="Без оценок"
				description="Произведения, опубликованные более двух недель назад, но не получившие ни одной оценки. Давайте оценим их!"
			/>
			<div className={styles.notRated}>
				<div className={styles.poems}>
					{notRated.poems.map((poem, index) => {
						return (
							<div key={poem.id}>
								{index !== 0 && (
									<Divider margin={15} className={styles.divider} />
								)}
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
					{notRated.proses.map((prose, index) => {
						return (
							<div key={prose.id}>
								{index !== 0 && (
									<Divider margin={15} className={styles.divider} />
								)}
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
