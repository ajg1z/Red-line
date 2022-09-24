export enum FormWorks {
	Poem = "poem",
	Story = "story",
	Novel = "novel",
	Affair = "affair",
	Storybook = "storybook",
	Essay = "essay",
	Article = "article",
	Manual = "manual",
	Song = "song",
	Tragedy = "tragedy",
	Epic = "epic",
	Another = "another",
	PoetryCollection = "poetry-collection",
	Monograph = "monograph",
	AllWorks = "",
}

export enum Category {
	Lyrics = "lyrics",
	Poetry = "poetry",
	Absurd = "absurd",
	Alternative = "alternative",
	SmashHit = "smash-hit",
	MilitaryProse = "military-prose",
	Detective = "detective",
	Childrens = "childrens",
	Documentation = "documentation",
	Dramaturgy = "dramaturgy",
	NaturalScience = "natural-science",
	Invention = "invention",
	History = "history",
	Cyberpunk = "cyberpunk",
	Criticism = "criticism",
	Lithoobservation = "lithoobservation",
	LoveStory = "love-story",
	Memoir = "memoir",
	Mystic = "mystic",
	Occultism = "occultism",
	Parody = "parody",
	Translation = "translation",
	Politics = "politics",
	PostApocalypse = "post-apocalypse",
	Postmodernism = "postmodernism",
	Adventure = "adventure",
	Prose = "prose",
	Psychology = "psychology",
	Journalism = "journalism",
	Realism = "realism",
	Religion = "religion",
	FairyTale = "fairy-tale",
	Event = "event",
	Steampunk = "steampunk",
	Surrealism = "surrealism",
	Fiction = "fiction",
	Fantasy = "fantasy",
	Horror = "horror",
	BlackHumor = "black-humor",
	Esoterics = "esoterics",
	Epic = "epic",
	Erotica = "erotica",
	Humor = "humor",
	Philosophy = "philosophy",
	Other = "other",
}

// export type Category =
// 	| "lyrics"
// 	| "poetry"
// 	| "absurd"
// 	| "alternative"
// 	| "smash-hit"
// 	| "military-prose"
// 	| "detective"
// 	| "childrens"
// 	| "documentation"
// 	| "dramaturgy"
// 	| "natural-science"
// 	| "invention"
// 	| "history"
// 	| "cyberpunk"
// 	| "criticism"
// 	| "lithoobservation"
// 	| "love-story"
// 	| "memoir"
// 	| "mystic"
// 	| "occultism"
// 	| "parody"
// 	| "translation"
// 	| "politics"
// 	| "post-apocalypse"
// 	| "postmodernism"
// 	| "adventure"
// 	| "prose"
// 	| "psychology"
// 	| "journalism"
// 	| "realism"
// 	| "religion"
// 	| "fairy-tale"
// 	| "event"
// 	| "steampunk"
// 	| "surrealism"
// 	| "fiction"
// 	| "fantasy"
// 	| "horror"
// 	| "black-humor"
// 	| "esoterics"
// 	| "epic"
// 	| "erotica"
// 	| "humor"
// 	| "other";

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
	Users = "/users",
	Personal = "/personal",
	Info = "/info",
	Books = "/books",
	Search = "/search",
}

export const DefaultParams = {
	domainUrl: process.env.NEXT_PUBLIC_DOMAIN,
	defaultImage: "",
};

export enum Keys {
	ArrowRight = "ArrowRight",
	ArrowLeft = "ArrowLeft",
	ArrowUp = "ArrowUp",
	ArrowDown = "ArrowDown",
	Space = "Space",
	Tab = "Tab",
	Shift = "Shift",
	Enter = "Enter",
}

export const RedirectError = {
	redirect: {
		destination: "/500",
		statusCode: 301 as const,
	},
};
