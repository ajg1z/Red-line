import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { Api } from "../../api";
import { Pages, RedirectError } from "../../global-constans";
import { withLayout } from "../../layout/layout";
import Book from "../../page-components/Book";
import { BookPageProps } from "../../page-components/Book/Book.types";

const BookPage: NextPage<BookPageProps> = ({ book }) => {
	return <Book book={book} />;
};

export const getStaticProps: GetStaticProps<BookPageProps> = async (ctx) => {
	const { id } = ctx.params as { id: string };

	if (!id) return RedirectError;

	try {
		const book = await Api.bookService.getBook(+id);
		if (!book) return RedirectError;
		const { comments, promotedBooks } = await Api.getSidebarData();
		return {
			props: { book, comments, promotedBooks },
		};
	} catch (e) {
		return RedirectError;
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await Api.bookService.getBooks();
	return {
		fallback: true,
		paths: paths.map((path) => `${Pages.Books}/${path.id}`),
	};
};

export default withLayout(BookPage);
