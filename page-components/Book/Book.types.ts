import { BookChard } from "../../interfaces/book.interface";
import { SidebarData } from "./../../layout/Sidebar/Sidebar.types";

export interface BookProps {
	book: BookChard;
}

export interface BookPageProps extends BookProps, SidebarData {}

export enum ContentBook {
	Read,
	Description,
}
