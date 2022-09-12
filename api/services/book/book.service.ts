import { FormWorks } from "./../../../global-constans";
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

	async getBooksCount(params: FormWorks.Poem | FormWorks.Story) {
		const { data: books } = await $api.get<BookChard[]>(`/books`);
		if (params === FormWorks.Poem)
			return books.filter((book) => book.formWork === FormWorks.Poem).length;
		return books.filter((book) => book.formWork === FormWorks.Story).length;
	},
};
