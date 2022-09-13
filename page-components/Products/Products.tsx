import React, { Fragment } from "react";
import {
	ProductsProps,
	SortProductEnum,
	СompletenessProductEnum,
} from "./Products.types";
import styles from "./Products.module.css";
import { useRouter } from "next/router";
import { Category, FormWorks, Pages } from "../../global-constans";
import { Radio, Search, SortLine, Title } from "../../components";
import {
	CategoryOptions,
	FormWorksOptions,
	SortOptions,
	СompletenessOptions,
} from "./constans";
import cn from "classnames";

const Products: React.FC<ProductsProps> = () => {
	const router = useRouter();
	const isProsesPage = router.asPath === Pages.Prose;
	const [search, setSearch] = React.useState("");
	const [sort, setSort] = React.useState<SortProductEnum>(SortProductEnum.Best);
	const [formWorks, setFormWorks] = React.useState<FormWorks>(
		FormWorks.AllWorks
	);
	const [category, setCategory] = React.useState<Category[]>([
		Category.AllCategory,
	]);
	const [isComplete, setIsComplete] = React.useState(
		СompletenessProductEnum.Completed
	);
	const toggleCategory = (value: Category) => {
		if (category.includes(value)) {
			setCategory(category.filter((category) => category !== value));
		} else setCategory([...category, value]);
	};
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
				<SortLine
					label="Сортировка:"
					name="sort"
					options={SortOptions}
					setValue={setSort}
					value={sort}
				/>
				{isProsesPage && (
					<Fragment key={1}>
						<SortLine
							label="Тип"
							name="type"
							options={СompletenessOptions}
							setValue={setIsComplete}
							value={isComplete}
						/>

						<SortLine
							label="Формы:"
							name="form"
							setValue={setFormWorks}
							options={FormWorksOptions}
							value={formWorks}
						/>
					</Fragment>
				)}

				<ul className={styles.categoryList}>
					<li>Категории:</li>
					{CategoryOptions.map((option) => {
						return (
							<li
								key={option.value}
								className={cn(styles.categoryItem, {
									[styles.selectedCategory]: category.includes(option.value),
								})}
							>
								<button onClick={() => toggleCategory(option.value)}>
									{option.label}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Products;
