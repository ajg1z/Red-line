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

export type Category =
	| "lyrics"
	| "poetry"
	| "absurd"
	| "alternative"
	| "smash-hit"
	| "military-prose"
	| "detective"
	| "childrens"
	| "documentation"
	| "dramaturgy"
	| "natural-science"
	| "invention"
	| "history"
	| "cyberpunk"
	| "criticism"
	| "lithoobservation"
	| "love-story"
	| "memoir"
	| "mystic"
	| "occultism"
	| "parody"
	| "translation"
	| "politics"
	| "post-apocalypse"
	| "postmodernism"
	| "adventure"
	| "prose"
	| "psychology"
	| "journalism"
	| "realism"
	| "religion"
	| "fairy-tale"
	| "event"
	| "steampunk"
	| "surrealism"
	| "fiction"
	| "fantasy"
	| "horror"
	| "black-humor"
	| "esoterics"
	| "epic"
	| "erotica"
	| "humor"
	| "other";

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
	Info = "/info",
	Book = "/book",
}

export const DefaultParams = {
	domainUrl: process.env.NEXT_PUBLIC_DOMAIN,
	defaultImage: "",
};
