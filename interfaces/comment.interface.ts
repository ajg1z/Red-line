import { BookChard } from "./book.interface";
import { Person } from "./person.interface";

export interface CommentItem {
	author: Person;
	product: BookChard;
	body: string;
	id: string;
	createdAt: string;
}
