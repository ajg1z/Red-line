import { $api } from "../..";
import { BookChard } from "../../../interfaces/book.interface";

export default {
	async getBooks(query?: string) {
		const { data } = await $api.get<BookChard[]>(`/books${query ?? ""}`);
		return data;
	},

	async getPromotedBooks() {
		const { data } = await $api.get<BookChard[]>("/promoted-books");
		return data;
	},

	async getBooksCount() {
		const { headers } = await $api.get<number>(`/books?_start=0&_end=0`);
		if (headers["x-total-count"]) return +headers["x-total-count"];
		return 0;
	},
};
