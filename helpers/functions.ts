import { FormWorks } from "../global-constans";

export function isProse(value: string) {
	if (value !== FormWorks.Story && value !== FormWorks.Storybook) return true;
	return false;
}

export function propertyExist<T>(property: T[] | T) {
	if (property) {
		if (Array.isArray(property)) {
			return !!property.length;
		}
		return true;
	}
	return false;
}

export function createArray(length: number) {
	return new Array(length).fill("").map((_, index) => index);
}

export function getQuery(queryValue: string | boolean | number, query: string) {
	if (queryValue) return `${query}=${queryValue}&`;
	return "";
}
