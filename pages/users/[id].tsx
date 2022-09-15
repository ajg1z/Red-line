import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { Api } from "../../api";
import { RedirectError } from "../../global-constans";
import { withLayout } from "../../layout/layout";
import User, { UserPageProps } from "../../page-components/User";

const UserPage: NextPage<UserPageProps> = ({ books, friends, user }) => {
	return <User books={books} friends={friends} user={user} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	const users = await Api.userService.getUsers();
	return {
		fallback: true,
		paths: users.map((user) => `/users/${user.id}`),
	};
};

export const getStaticProps: GetStaticProps<UserPageProps> = async (ctx) => {
	const { id } = ctx.params as { id: string };

	if (!id) return RedirectError;

	try {
		const user = await Api.userService.getUser(id);
		const { comments, promotedBooks } = await Api.getSidebarData();
		const friends = user.friends
			? await Api.userService.getUsers(
					`?${user.friends.map((friend) => `id=${friend}&`).join("")}`
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  )
			: [];

		const books = await Api.bookService.getBooks(`?author=${user.id}`);
		return {
			props: {
				books,
				comments,
				promotedBooks,
				friends,
				user,
			},
		};
	} catch (e) {
		console.log(e);
		return RedirectError;
	}
};

export default withLayout(UserPage);
