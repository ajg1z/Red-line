import { CommentItem } from "../../interfaces/comment.interface";
import { Person } from "../../interfaces/person.interface";

export interface CommentsProps {
	comments: CommentItem[];
	id: string | number;
	author: Person;
}
