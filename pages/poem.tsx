import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { Api } from "../api";
import { FormWorks, Pages } from "../global-constans";
import { withLayout } from "../layout/layout";
import Products, { ProductsPageProps } from "../page-components/Products";

const ProductsPage: NextPage<ProductsPageProps> = (props) => {
	return <Products books={props.books} productsCount={props.productsCount} />;
};

export const getStaticProps: GetStaticProps<ProductsPageProps> = async () => {
	try {
		const books = await Api.bookService.getBooks();
		const productsCount = await Api.bookService.getBooksCount(FormWorks.Poem);
		const { comments, promotedBooks } = await Api.getSidebarData();
		return {
			props: { books, comments, promotedBooks, productsCount },
		};
	} catch (e) {
		console.log(e);
		return {
			redirect: {
				statusCode: 301,
				destination: "/500",
			},
		};
	}
};

export default withLayout(ProductsPage);
