import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SearchProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	classInput?: string;
	value?: string;
	onChangeInput: (value: string) => void;
	onClick: (event: React.MouseEvent) => void;
}
