import { FormWorksType } from "../global-constans";

export interface BookChard {
	title: string;
	img?: string;
	genres: string[];
	description?: string;
	tags?: string[];
	author: string;
	id: string;
	formWork: FormWorksType;
	adultContent?: boolean;
	weekRating: number;
	monthRating: number;
	allTimeRating: number;
	createdAt: string;
	isComplete: boolean;
}
