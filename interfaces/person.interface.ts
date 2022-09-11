export interface Person {
	name: string;
	id: string;
	avatar: string;
	rating: number;
	info: PersonInfo;
	friends: string[];
	createdAt: string;
}

export interface PersonInfo {
	city: string;
	description: string;
	preferGenres: string;
	favoriteBooks: string;
	fullName: string;
	age: number;
	beginWrite: number;
}
