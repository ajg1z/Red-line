import { GenresMyBooks } from "../../../../api/services/book/book.interface";
import { BookChard } from "../../../../interfaces/book.interface";
import { Person } from "../../../../interfaces/person.interface";

export interface WorksProps {
	bookProps: BookChard[];
	user: Person;
	booksCount: number;
	genresProps: GenresMyBooks[];
}

export interface LimitLoadedItem {
	blogs: number;
	books: number;
}
