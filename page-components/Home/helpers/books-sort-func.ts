import { FormWorks } from "../../../global-constans";
import { BookChard } from "../../../interfaces/book.interface";
import { SortPeriod } from "../components/Top/Top.types";

const getRatingField = (book: BookChard, type: SortPeriod) => {
	if (type === SortPeriod.Week) return book.weekRating;
	if (type === SortPeriod.Month) return book.monthRating;
	return book.allTimeRating;
};

export function getSortedProsesByField(books: BookChard[], type: SortPeriod) {
	return books
		.filter((book) => book.formWork !== FormWorks.Poem)
		.sort((a, b) => getRatingField(b, type) - getRatingField(a, type))
		.slice(0, 5);
}

export function getSortedPoemsByField(books: BookChard[], type: SortPeriod) {
	return books
		.filter((book) => book.formWork === FormWorks.Poem)
		.sort((a, b) => getRatingField(b, type) - getRatingField(a, type))
		.slice(0, 5);
}
