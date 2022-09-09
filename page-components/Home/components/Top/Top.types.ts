import { BaseOptions } from "../../../../helpers/common-types";

export interface TopProps {
	title: string;
	description?: string;
	sortAction?: () => void;
	sortTypes?: BaseOptions<string, number>[];
	sortLabel?: string;
}
