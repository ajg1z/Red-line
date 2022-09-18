import React, { Fragment } from "react";
import { ProductsProps, SortProductEnum } from "./Products.types";
import styles from "./Products.module.css";
import { useRouter } from "next/router";
import { Category, FormWorks, Pages } from "../../global-constans";
import {
	BookCard,
	Checkbox,
	Divider,
	Pagination,
	Radio,
	Search,
	SortLine,
	Title,
} from "../../components";
import {
	CategoryOptions,
	FormWorksOptions,
	SortOptions,
	СompletenessOptions,
} from "./constans";
import cn from "classnames";
import { getCategoryProducts, getSortPriducts } from "./helpers/query-handle";
import { Api } from "../../api";
import { getQuery } from "../../helpers/functions";

const Products: React.FC<ProductsProps> = ({ books, productsCount }) => {
	const [limit, setLimit] = React.useState(10);
	const [page, setPage] = React.useState(1);

	const [sortedBooks, setSortedBooks] = React.useState(books);

	const router = useRouter();
	const [search, setSearch] = React.useState("");
	const [sort, setSort] = React.useState<SortProductEnum>(SortProductEnum.Best);

	const [formWork, setFormWork] = React.useState<FormWorks>(FormWorks.AllWorks);
	const [category, setCategory] = React.useState<Category[]>([]);

	const [isComplete, setIsComplete] = React.useState<boolean>(true);

	const toggleCategory = (value: Category) => {
		if (category.includes(value)) {
			setCategory(category.filter((category) => category !== value));
		} else setCategory([...category, value]);
	};
	const handleSearchProducts = async () => {
		const categoriesQuery = getCategoryProducts(category);
		const sortQuery = getSortPriducts(sort);
		try {
			const response = await Api.bookService.getBooks(`
				?${sortQuery}${categoriesQuery}${getQuery(
				formWork,
				"formWork"
			)}isComplete=${isComplete}&${getQuery(
				search,
				"q"
			)}_limit=${limit}&_page=${page}
			`);
			setSortedBooks(response);
		} catch (e) {
			console.log(e);
		}
	};

	React.useEffect(() => {
		handleSearchProducts();
	}, [sort, isComplete, formWork, category, page]);
	return (
		<div className={styles.container}>
			<Title tag="h1" className={styles.title}>
				Проза
			</Title>
			<div className={styles.sortOptions}>
				<Search
					onChangeInput={setSearch}
					onClick={handleSearchProducts}
					className={styles.search}
				/>
				<SortLine
					label="Сортировка:"
					name="sort"
					options={SortOptions}
					setValue={setSort}
					value={sort}
				/>

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
					setValue={setFormWork}
					options={FormWorksOptions}
					value={formWork}
				/>

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
			<div className={styles.books}>
				{sortedBooks.map((book) => {
					return (
						<Fragment key={book.id}>
							<Divider margin={15} />
							<BookCard {...book} size="small" />
						</Fragment>
					);
				})}
			</div>
			<Pagination max={productsCount} page={page} setPage={setPage} />
		</div>
	);
};

export default Products;
