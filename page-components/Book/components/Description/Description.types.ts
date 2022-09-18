import { FormWorks, FormWorksType } from "../../../../global-constans";

export interface DescriptionProps {
	name: string;
	description?: string;
	tags?: string[];
	genres: string[];
	isComplete: boolean;
	createdAt: string;
	rating: number;
	formWork: FormWorksType;
}
