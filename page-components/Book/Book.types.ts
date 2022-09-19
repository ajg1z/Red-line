import { BookChard } from "../../interfaces/book.interface";
import { CommentItem } from "../../interfaces/comment.interface";
import { Person } from "../../interfaces/person.interface";
import { SidebarData } from "./../../layout/Sidebar/Sidebar.types";

export interface BookProps {
	book: BookChard;
	commentsBooks: CommentItem[];
	user: Person;
}

export interface BookPageProps extends BookProps, SidebarData {}

export enum ContentBook {
	Read,
	Description,
}
