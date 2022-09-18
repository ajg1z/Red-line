import { CommentItem } from "./../../../interfaces/comment.interface";
import { InitialBook } from "./../book/book.interface";
import { Person } from "./../../../interfaces/person.interface";
import { $api } from "../..";
import userService from "../user/user.service";
import { InitialComment } from "./comment.interface";
import bookService from "../book/book.service";

export default {
	async getComments(query?: string): Promise<CommentItem[]> {
		const authors: Person[] = [];
		const books: InitialBook[] = [];
		const { data } = await $api.get<InitialComment[]>(
			`/comments${query ?? ""}`
		);

		for (const comment of data) {
			const author = await userService.getUser(comment.author);
			const book = await bookService.getBook(+comment.product);
			authors.push(author);
			books.push(book);
		}

		return data.map((comment) => ({
			...comment,
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			author: authors.find((author) => author.id === comment.author)!,
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			product: books.find((book) => book.id === comment.product)!,
		}));
	},
};
