import { BookChard } from "../../interfaces/book.interface";
import { SidebarData } from "../../layout/Sidebar/Sidebar.types";

export interface SearchProps {
	books: BookChard[];
}

export interface SearchPageProps extends SidebarData {
	books: BookChard[];
}
