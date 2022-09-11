import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BookChard } from "../../interfaces/book.interface";
import { CommentItem } from "../../interfaces/comment.interface";

export interface SidebarProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface SidebarData {
	promotedBooks: BookChard[];
	comments: CommentItem[];
}
