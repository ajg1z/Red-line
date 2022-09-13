import { BookChard } from "../../interfaces/book.interface";
import { SidebarData } from "../../layout/Sidebar/Sidebar.types";

export interface ProductsProps {
	productsCount: number;
	books: BookChard[];
}

export interface ProductsPageProps extends SidebarData {
	productsCount: number;
	books: BookChard[];
}

export enum SortProductEnum {
	New = "new",
	Best = "best",
}

export enum СompletenessProductEnum {
	Completed = "completed",
	InComplete = "inComplete",
}
