import axios from "axios";
import bookService from "./services/book/book.service";
import commentService from "./services/comment/comment.service";
import userService from "./services/user/user.service";
import blogService from "./services/blog/blog.service";
import { Statistics } from "../page-components/Home";

export const $api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
	timeout: 10000,
});

export const Api = {
	bookService,
	commentService,
	userService,
	blogService,
	async statistics() {
		const { data } = await $api.get<Statistics>("/statistics");
		return data;
	},

	async getSidebarData() {
		const comments = await commentService.getComments();
		const promotedBooks = await bookService.getPromotedBooks();
		return {
			comments,
			promotedBooks,
		};
	},
};
