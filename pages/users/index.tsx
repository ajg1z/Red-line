import { GetStaticProps, NextPage } from "next";
import React from "react";
import { Api } from "../../api";
import { withLayout } from "../../layout/layout";
import Users, { UsersPageProps } from "../../page-components/Users";

const UsersPage: NextPage<UsersPageProps> = ({ users, usersCount }) => {
	return <Users usersCount={usersCount} users={users} />;
};

export default withLayout(UsersPage);

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
	try {
		const { comments, promotedBooks } = await Api.getSidebarData();
		const usersCount = await Api.userService.getUsersCount();
		const users = await Api.userService.getUsers();
		return {
			props: {
				users,
				promotedBooks,
				comments,
				usersCount,
			},
		};
	} catch (e) {
		return {
			redirect: {
				statusCode: 301,
				destination: `/500`,
			},
		};
	}
};
