export function getBeginWtiteYear(query: string | null) {
	if (!query) return "";
	if (query === "before")
		return `info.beginWrite_gte=1900&info.beginWrite_lte=2000&`;
	if (query.includes("-"))
		return `info.beginWrite_gte=2001&info.beginWrite_lte=2012&`;
	return `info.beginWrite=${query}&`;
}

export function getTimeOnSite(query: string | null) {
	if (!query) return "";
	if (query === "three-month") return `createdAt_gte=2022-05-01&`;
	if (query === "month") return `createdAt_gte=2022-08-01&`;
	if (query === "six-month") return `createdAt_gte=2022-03-01&`;
	return `createdAt_gte=2021-01-01&`;
}
