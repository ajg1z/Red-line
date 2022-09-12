import type { GetStaticProps, NextPage } from "next";
import { Api } from "../api";
import { withLayout } from "../layout/layout";
import Home, { HomePageProps } from "../page-components/Home/index";

const HomePage: NextPage<HomePageProps> = (props) => {
	return <Home books={props.books} statistics={props.statistics} />;
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
	try {
		// так как это фейковый api-server, то можно я подгружаю здесь все книги, но на настоящем сервере так не сделал бы
		const books = await Api.bookService.getBooks();
		const statistics = await Api.statistics();

		const { promotedBooks, comments } = await Api.getSidebarData();

		return {
			props: { comments, promotedBooks, statistics, books },
		};
	} catch (e) {
		console.log(e);
		return {
			notFound: true,
		};
	}
};

export default withLayout(HomePage);
