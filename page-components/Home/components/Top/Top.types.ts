import { BaseOptions } from "../../../../helpers/common-types";

export interface TopProps {
	title: string;
	description?: string;
	sortAction?: (type: SortPeriod) => void;
	sortTypes?: BaseOptions<string, number>[];
	sortLabel?: string;
}

export enum SortPeriod {
	Week = 1,
	Month,
	AllTime,
}
