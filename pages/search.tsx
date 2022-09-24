import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { Api } from "../api";
import { withLayout } from "../layout/layout";
import Search from "../page-components/Search";
import { SearchPageProps } from "../page-components/Search/Search.types";

const SearchPage: NextPage<SearchPageProps> = ({ books }) => {
	return <Search books={books} />;
};

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async (
	ctx
) => {
	const { q } = ctx.query;
	console.log(q);

	try {
		const { comments, promotedBooks } = await Api.getSidebarData();
		const books = await Api.bookService.getBooks(`?q=${q}`);
		console.log("Working!!!");

		return {
			props: { comments, promotedBooks, books },
		};
	} catch (e) {
		console.log(e);

		return {
			redirect: {
				destination: "/500",
				statusCode: 301,
			},
		};
	}
};

export default withLayout(SearchPage);
