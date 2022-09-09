import { BookChard } from "./page-components/Home/Home.types";

export enum FormWorks {
	Poem = "poem",
	Story = "story",
	Novel = "novel",
	Storybook = "storybook",
	Essay = "essay",
	Article = "article",
	Manual = "manual",
	Song = "song",
	Another = "another",
}

export type FormWorksType =
	| "poem"
	| "story"
	| "novel"
	| "storybook"
	| "essay"
	| "article"
	| "manual"
	| "song"
	| "another";

export enum Pages {
	Home = "/",
	Poem = "/poem",
	Prose = "/prose",
	Users = "/users",
	Personal = "/personal",
}

export const MockProses: BookChard[] = [
	{ author: "Nino", description: "", formWork: "manual", genres: [] },
];

export const DefaultParams = {
	domainUrl: process.env.NEXT_PUBLIC_DOMAIN,
	defaultImage: "",
};
