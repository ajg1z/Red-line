import type { GetStaticProps, NextPage } from "next";
import { $api } from "../api";
import { BookChard } from "../interfaces/book.interface";
import { CommentItem } from "../interfaces/comment.interface";
import { withLayout } from "../layout/layout";
import HomePage, { HomeData, HomeProps } from "../page-components/Home/index";

const Home: NextPage<HomeProps> = (props) => {
	return <HomePage {...props} />;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	try {
		const { data } = await $api.get<HomeData>("/home");
		const { data: lastComments } = await $api.get<CommentItem[]>(
			"/last-comments"
		);
		const { data: promotedBooks } = await $api.get<BookChard[]>(
			"/promoted-books"
		);
		return {
			props: { ...data, lastComments, promotedBooks },
		};
	} catch (e) {
		console.log(e);
		return {
			notFound: true,
		};
	}
};

export default withLayout(Home);
