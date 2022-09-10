import { BookChard } from "./book.interface";
import { CommentItem } from "./comment.interface";

export interface AppContextPayload {
	promotedBooks: BookChard[];
	lastComments: CommentItem[];
}
