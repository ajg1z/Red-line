import { FormWorksType } from "../../global-constans";

export interface HomeProps {
	statistics: Statistics;
	topProses: BookChard[];
}

export interface Statistics {
	users: number;
	works: number;
	readed: number;
	comments: number;
}

export interface BookChard {
	title: string;
	img: string;
	genres: string[];
	description: string;
	tags: string[];
	author: string;
	id: string;
	formWork: FormWorksType;
}
