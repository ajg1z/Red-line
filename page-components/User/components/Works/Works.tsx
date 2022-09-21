import cn from "classnames";
import React, { Fragment } from "react";
import { Api } from "../../../../api";
import {
	BlogCard,
	BookCard,
	Button,
	Divider,
	Paragraph,
} from "../../../../components";
import { FormWorks } from "../../../../global-constans";
import { BaseOptions } from "../../../../helpers/common-types";
import { Blog } from "../../../../interfaces/blog.interface";
import { BookChard } from "../../../../interfaces/book.interface";
import { MyWorksOptions } from "../../constans";
import { BooksMenuOptions, MenuBooks, MyWorksType } from "../../User.types";
import MenuList from "../MenuList";
import { getQueryMenuBooks } from "./helpers/query-handle";
import styles from "./Works.module.css";
import { LimitLoadedItem, WorksProps } from "./Works.types";
import { useRouter } from "next/router";
import { GenresMyBooks } from "../../../../api/services/book/book.interface";

const Works: React.FC<WorksProps> = ({
	bookProps,
	user,
	booksCount,
	genresProps,
}) => {
	const [blogs, setBlogs] = React.useState<Blog[]>([]);
	const [books, setBooks] = React.useState<BookChard[]>(bookProps);
	const [genres, setGenres] = React.useState<GenresMyBooks[]>(genresProps);
	const [limit, setLimit] = React.useState<LimitLoadedItem>({
		blogs: 10,
		books: 10,
	});

	const router = useRouter();

	const BooksMenuOptions: BooksMenuOptions[] = React.useMemo(() => {
		const base: BaseOptions<string, MenuBooks | FormWorks>[] = [
			{ label: "Новые", value: MenuBooks.New },
			{ label: "Закрепленные", value: MenuBooks.Favorites },
			{ label: "Рекомендуемые", value: MenuBooks.Recommended },
		];
		return [
			...base,
			...genres.map((el) => ({
				label: el.name,
				count: el.count,
				value: el.name,
			})),
		];
	}, [genres]);

	const [menuBooks, setMenuBooks] = React.useState<MenuBooks | FormWorks>(
		MenuBooks.New
	);

	const [myWorks, setMyWorks] = React.useState<MyWorksType>(
		MyWorksType.MyBooks
	);

	const handleLoadBlogs = async () => {
		try {
			const response = await Api.blogService.getBlogs(
				`?author=${user.id}&limit=${limit.blogs}`
			);
			console.log("response - ", response);
			setBlogs(response);
		} catch (e) {
			console.log(e);
		}
	};

	React.useEffect(() => {
		if (myWorks === MyWorksType.MyBlogs && !blogs.length) handleLoadBlogs();
	}, [myWorks]);

	const refreshPage = async (id: string) => {
		setMyWorks(MyWorksType.MyBooks);
		setLimit({ blogs: 10, books: 10 });
		setMenuBooks(MenuBooks.New);

		try {
			const genres = await Api.bookService.getMyBooksGenres(id);
			const books = await Api.bookService.getBooks(`?author=${id}&_limit=10`);
			setBlogs([]);
			setGenres(genres);
			setBooks(books);
		} catch (e) {
			console.log(e);
		}
	};

	const handleLoadBooks = async () => {
		const baseQuery = getQueryMenuBooks(
			menuBooks,
			user.recommended,
			user.favorites,
			user.id
		);
		try {
			const response = await Api.bookService.getBooks(
				`?${baseQuery}_limit=${limit.books}`
			);
			setBooks(response);
		} catch (e) {
			console.log(e);
		}
	};

	React.useEffect(() => {
		handleLoadBooks();
	}, [limit, menuBooks]);

	React.useEffect(() => {
		const userId = router.asPath.split("/")[2];
		if (user.id !== userId) refreshPage(userId);
	}, [router]);

	const worksTypeReducer = React.useMemo(() => {
		if (myWorks === MyWorksType.MyBlogs)
			return (
				<div className={styles.myBlogs}>
					{!blogs.length && <Paragraph>Пока ничего нет</Paragraph>}
					{blogs.map((blog, index) => {
						return (
							<>
								{index !== 0 && <Divider margin={15} />}
								<BlogCard {...blog} key={blog.id} />
							</>
						);
					})}
				</div>
			);
		return (
			<div className={styles.myWorks}>
				<div className={cn(styles.panel, styles.visible)}>
					<ul className={styles.menuBooksList}>
						{BooksMenuOptions.map((option) => {
							return (
								<li
									key={option.value}
									className={cn(styles.menuBooksItem, {
										[styles.activeBooksItem]: option.value === menuBooks,
									})}
								>
									<button onClick={() => setMenuBooks(option.value)}>
										{option.label}
										{option.count && `(${option.count})`}
									</button>
								</li>
							);
						})}
					</ul>
				</div>
				<div className={styles.booksContent}>
					{!books.length && (
						<Paragraph>Опубликованных произведений еще нет.</Paragraph>
					)}
					{books.map((book, index) => {
						return (
							<Fragment key={book.id}>
								{index !== 0 && <Divider margin={15} />}
								<BookCard {...book} />
							</Fragment>
						);
					})}
				</div>
				<div className={cn(styles.panel, styles.hidden)}>
					<ul className={styles.menuBooksList}>
						{BooksMenuOptions.map((option) => {
							return (
								<li
									key={option.value}
									className={cn(styles.menuBooksItem, {
										[styles.activeBooksItem]: option.value === menuBooks,
									})}
								>
									<button onClick={() => setMenuBooks(option.value)}>
										{option.label}
										{option.count && `(${option.count})`}
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}, [books, blogs, myWorks]);

	const loadMore = () => {
		if (myWorks === MyWorksType.MyBooks) {
			if (booksCount > 10 && limit.books < booksCount)
				return (
					<Button
						onClick={() => setLimit({ ...limit, books: limit.books + 10 })}
						variant="fill"
					>
						Загрузить еще
					</Button>
				);
		}
		if (booksCount > 10 && limit.blogs < booksCount)
			return (
				<Button
					onClick={() => setLimit({ ...limit, blogs: limit.blogs + 10 })}
					variant="fill"
				>
					Загрузить еще
				</Button>
			);
		return <></>;
	};

	return (
		<div className={styles.container}>
			<MenuList
				className={styles.menuList}
				options={MyWorksOptions}
				activeValue={myWorks}
				setMenu={setMyWorks}
			/>
			{worksTypeReducer}
		</div>
	);
};

export default Works;
