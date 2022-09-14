import { BaseOptions } from "../../helpers/common-types";

export interface SortItemProps {
	label: string;
	options: BaseOptions<string, any>[];
	value: string | null | boolean;
	name: string;
	setValue: (params: any) => void;
}

export interface QueryParams {
	sort: "rating" | "createdAt";
	inSite: "three-month" | "month" | "six-month" | "year" | null;
	experience: null | "2016" | "2015" | "2014" | "2013" | "2001-2012" | "befote";
	limit: number;
	page: number;
}
