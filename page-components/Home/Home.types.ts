import { BookChard } from "./../../interfaces/book.interface";
import { CommentItem } from "../../interfaces/comment.interface";

export interface HomeProps extends Record<string, unknown> {
	statistics: Statistics;
	topProses: BookChard[];
	topPoem: BookChard[];
	notRated: NotRated;
	lastComments: CommentItem[];
	promotedBooks: BookChard[];
}

export interface NotRated {
	poems: BookChard[];
	proses: BookChard[];
}

export interface HomeData {
	statistics: Statistics;
	topProses: BookChard[];
	topPoem: BookChard[];
	notRated: NotRated;
}

export interface Statistics {
	users: number;
	works: number;
	readed: number;
	comments: number;
}
