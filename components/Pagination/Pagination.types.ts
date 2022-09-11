import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PaginationProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setPage: (page: number) => void;
	page: number;
	max: number;
}
