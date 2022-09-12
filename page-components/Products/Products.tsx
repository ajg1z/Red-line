import React from "react";
import { ProductsProps, SortProductType } from "./Products.types";
import styles from "./Products.module.css";
import { useRouter } from "next/router";
import { Pages } from "../../global-constans";
import { Radio, Search, Title } from "../../components";
import { SortOptions } from "./constans";

const Products: React.FC<ProductsProps> = () => {
	const router = useRouter();
	const isProsesPage = router.asPath === Pages.Prose;
	const [search, setSearch] = React.useState("");
	const [sort, setSort] = React.useState<SortProductType>("new");
	const handleSearch = () => {};
	return (
		<div className={styles.container}>
			<Title tag="h1" className={styles.title}>
				Проза
			</Title>
			<div className={styles.sortOptions}>
				<Search
					onChangeInput={setSearch}
					onClick={handleSearch}
					className={styles.search}
				/>
				<ul className={styles.sortList}>
					<li>Сортировка:</li>
					{SortOptions.map((option) => {
						return (
							<li key={option.value}>
								<Radio
									onChange={() => setSort(option.value)}
									name={"sort"}
									checked={option.value === sort}
									title={option.label}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Products;
