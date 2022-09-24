import React from "react";
import { SearchProps } from "./Search.types";
import styles from "./Search.module.css";
import { BookCard, Divider, Title } from "../../components";
import { useRouter } from "next/router";

const Search: React.FC<SearchProps> = ({ books }) => {
	const query = useRouter();
	return (
		<div className={styles.container}>
			<Title className={styles.title} tag="h1">
				Результат по запросу <p>`{query.query.q}`</p>
			</Title>
			<Divider />
			<div className={styles.result}>
				{!books.length && <p>Ничего не найдено</p>}
				{books.map((book, index) => {
					return (
						<>
							{index !== 0 && <Divider margin={15} />}
							<BookCard {...book} />
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Search;
