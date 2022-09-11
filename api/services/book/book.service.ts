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
};
