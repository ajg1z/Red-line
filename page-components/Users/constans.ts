import { BaseOptions } from "../../helpers/common-types";

export const SortOptions: BaseOptions[] = [
	{ label: "по рейтингу", value: "rating" },
	{ label: "по дате регистрации", value: "createdAt" },
];

export const SearchInSiteOptions: BaseOptions<string, null | string>[] = [
	{ label: "не важно", value: null },
	{ label: "менее  месяца", value: "month" },
	{ label: "менее 3 месяцев", value: "three-month" },
	{ label: "менее 6 месяцев", value: "six-month" },
	{ label: "менее года", value: "year" },
];

export const SearchBeginWrite: BaseOptions<string, string | null>[] = [
	{ label: "не важно", value: null },
	{ label: "2016", value: "2016" },
	{ label: "2015", value: "2015" },
	{ label: "2014", value: "2014" },
	{ label: "2013", value: "2013" },
	{ label: "2001-2012", value: "2001-2012" },
	{ label: "ранее 2000", value: "before" },
];
