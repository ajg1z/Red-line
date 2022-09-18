import { Person } from "./person.interface";
import { FormWorksType } from "../global-constans";

export interface BookChard {
	name: string;
	img?: string;
	genres: string[];
	description?: string;
	tags?: string[];
	author: Person;
	id: string;
	body: string | string[];
	formWork: FormWorksType;
	adultContent?: boolean;
	weekRating: number;
	monthRating: number;
	allTimeRating: number;
	createdAt: string;
	isComplete: boolean;
	show: boolean;
	viewers: number;
	isPublished: boolean;
}
