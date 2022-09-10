import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BookCardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	img?: string;
	genres: string[];
	description?: string;
	tags?: string[];
	size?: "normal" | "small";
	author?: string;
	id: string;
	formWork: string;
}
