import { Person } from "./../../interfaces/person.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BookChard } from "../../interfaces/book.interface";

export interface BookCardProps
	extends Omit<
			DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
			"id"
		>,
		BookChard {
	size?: "normal" | "small";
	edit?: boolean;
	showStatus?: boolean;
}
