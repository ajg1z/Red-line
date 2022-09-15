import { BookChard } from "../../interfaces/book.interface";
import { Person } from "../../interfaces/person.interface";
import { SidebarData } from "../../layout/Sidebar/Sidebar.types";

export interface UserProps {
	user: Person;
	friends: Person[];
	books: BookChard[];
}

export interface UserPageProps extends UserProps, SidebarData {}
