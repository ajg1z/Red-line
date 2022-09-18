import { FormWorks, FormWorksType } from "../../../global-constans";

export interface InitialBook {
	name: string;
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
	body: string[] | string;
	show: boolean;
	isPublished: boolean;
}

export interface GenresMyBooks {
	name: FormWorks;
	count: number;
}
