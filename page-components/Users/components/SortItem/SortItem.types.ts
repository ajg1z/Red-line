import { BaseOptions } from "./../../../../helpers/common-types";
export interface SortItemProps {
	label: string;
	options: BaseOptions<string, string | null>[];
	value: string | null;
	name: string;
	setValue: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface QueryParams {
	sort: "rating" | "createdAt";
	inSite: "three-month" | "month" | "six-month" | "year" | null;
	experience: null | "2016" | "2015" | "2014" | "2013" | "2001-2012" | "befote";
	limit: number;
	page: number;
}
