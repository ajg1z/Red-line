import { $api } from "../..";
import { BookChard } from "../../../interfaces/book.interface";
import { Person } from "../../../interfaces/person.interface";
import userService from "../user/user.service";
import { GenresMyBooks, InitialBook } from "./book.interface";
import getFormWorks from "./helpers/getFormWorks";

export default {
	async getBooks(query?: string, notPublished?: boolean): Promise<BookChard[]> {
		const authors: Person[] = [];
		const { data } = await $api.get<InitialBook[]>(`/books${query ?? ""}`);
		for (const book of data) {
			const response = await userService.getUser(book.author);
			if (response) authors.push(response);
		}
		return data
			.filter((book) => (notPublished ? true : book.isPublished && book.show))
			.map((book) => ({
				...book,
				author: authors.find((author) => author.id === book.author) as Person,
			}));
	},

	async getPromotedBooks() {
		const { data } = await $api.get<BookChard[]>("/promoted-books");
		return data;
	},

	async getBook(id: number | number): Promise<BookChard> {
		const { data } = await $api.get<InitialBook>(`/books/${id}`);
		const author = await userService.getUser(data.author);
		return { ...data, author };
	},

	async getBooksCount() {
		const { headers } = await $api.get<number>(`/books?_start=0&_end=0`);
		if (headers["x-total-count"]) return +headers["x-total-count"];
		return 0;
	},

	async getMyBooksGenres(author: string): Promise<GenresMyBooks[]> {
		const { data } = await $api.get<InitialBook[]>(`/books?author=${author}`);
		return getFormWorks(data);
	},
};
