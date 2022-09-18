import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BaseOptions } from "../../../../helpers/common-types";

export interface MenuListProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLUListElement>,
		HTMLUListElement
	> {
	options: BaseOptions<string, string | number>[];
	setMenu?: React.Dispatch<React.SetStateAction<string | number | any>>;
	activeValue?: string | number;
}
