import { Person } from "./person.interface";

export interface CommentItem {
	author: Person;
	product: Person;
	body: string;
	id: string;
}
