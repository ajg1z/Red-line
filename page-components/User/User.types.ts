import { GenresMyBooks } from "../../api/services/book/book.interface";
import { FormWorks, FormWorksType } from "../../global-constans";
import { BookChard } from "../../interfaces/book.interface";
import { Person } from "../../interfaces/person.interface";
import { SidebarData } from "../../layout/Sidebar/Sidebar.types";

export interface UserProps {
	user: Person;
	friends: Person[];
	books: BookChard[];
	booksCount: number;
	genres: GenresMyBooks[];
}

export interface UserPageProps extends UserProps, SidebarData {}

export enum MyWorksType {
	MyBooks = 1,
	MyBlogs,
}

export enum MenuBooks {
	New = "new",
	Favorites = "favorites",
	Recommended = "recommended",
}

export interface BooksMenuOptions {
	label: string;
	value: MenuBooks | FormWorks;
	count?: number;
}
