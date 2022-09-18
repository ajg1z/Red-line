import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	bgColor: TagColors;
	children: ReactNode;
}

export enum TagColors {
	Red,
	Green,
	Orange,
	Black,
}
