import { InitialBook } from "../api/services/book/book.interface";
import { Person } from "./person.interface";

export interface CommentItem {
	author: Person;
	product: InitialBook;
	body: string;
	id: string;
}
