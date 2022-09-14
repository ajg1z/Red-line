import { Category, FormWorks } from "../../../global-constans";
import { SortProductEnum } from "../Products.types";

export function getSortPriducts(sort: SortProductEnum) {
	if (sort === SortProductEnum.Best) return `_sort=allTimeRating&_order=desc&`;
	return `_sort=createdAt&_order=desc&`;
}

export function getCategoryProducts(categories: Category[]) {
	return categories.map((category) => `genres=${category}&`).join("");
}
