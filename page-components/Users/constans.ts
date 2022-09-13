import { BaseOptions } from "../../helpers/common-types";
import { BeginWriteEnum, InSiteEnum, SortUsersEnum } from "./Users.types";

export const SortOptions: BaseOptions[] = [
	{ label: "по рейтингу", value: SortUsersEnum.Rating },
	{ label: "по дате регистрации", value: SortUsersEnum.CreatedAt },
];

export const SearchInSiteOptions: BaseOptions<string, null | string>[] = [
	{ label: "не важно", value: InSiteEnum.Null },
	{ label: "менее  месяца", value: InSiteEnum.Month },
	{ label: "менее 3 месяцев", value: InSiteEnum.Month_3 },
	{ label: "менее 6 месяцев", value: InSiteEnum.Month_6 },
	{ label: "менее года", value: InSiteEnum.Year },
];

export const SearchBeginWrite: BaseOptions<string, string | null>[] = [
	{ label: "не важно", value: BeginWriteEnum.Null },
	{ label: "2016", value: BeginWriteEnum.Year_2016 },
	{ label: "2015", value: BeginWriteEnum.Year_2015 },
	{ label: "2014", value: BeginWriteEnum.Year_2014 },
	{ label: "2013", value: BeginWriteEnum.Year_2013 },
	{ label: "2001-2012", value: BeginWriteEnum.Years_2001_2012 },
	{ label: "ранее 2000", value: BeginWriteEnum.Years_before_2000 },
];
