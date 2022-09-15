import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface UserInfoProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	label: string;
	value?: string | number;
}
