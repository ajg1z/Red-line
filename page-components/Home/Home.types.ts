import { BookChard } from "./../../interfaces/book.interface";
import { SidebarData } from "../../layout/Sidebar/Sidebar.types";

export interface HomeProps extends Record<string, unknown> {
	statistics: Statistics;
	books: BookChard[];
}

export interface HomePageProps
	extends Record<string, unknown>,
		SidebarData,
		HomeProps {}

export interface NotRated {
	poems: BookChard[];
	proses: BookChard[];
}

export interface Statistics {
	users: number;
	works: number;
	readed: number;
	comments: number;
}
