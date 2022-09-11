import { DetailedHTMLProps, InputHTMLAttributes } from "react";
export interface RadioProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	title: string;
	reverse?: boolean;
}
