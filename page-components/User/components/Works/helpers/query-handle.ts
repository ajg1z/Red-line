import { FormWorks } from "./../../../../../global-constans";
import { MenuBooks } from "../../../User.types";

export function getQueryMenuBooks(
	type: MenuBooks | FormWorks,
	recommended: number[],
	favorites: number[],
	userId: string
) {
	if (type === MenuBooks.New)
		return `author=${userId}&_sort=createdAt_order=desc&`;
	if (type === MenuBooks.Recommended)
		return recommended.map((recom) => `id=${recom}&`).join("");
	if (type === MenuBooks.Favorites)
		return favorites.map((favorite) => `id=${favorite}&`).join("");
	return `author=${userId}&formWork=${type}&`;
}
