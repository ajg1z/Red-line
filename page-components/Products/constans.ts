import { BaseOptions } from "../../helpers/common-types";
import { SortProductType } from "./Products.types";

export const SortOptions: BaseOptions<string, SortProductType>[] = [
	{ label: "новые", value: "new" },
	{ label: "лучшие", value: "best" },
];

export const CategoryOptions: BaseOptions[] = [];
