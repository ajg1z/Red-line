import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface CheckboxProps
	extends Omit<
		DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		"size"
	> {
	label?: string;
	size?: "small" | "middle";
}
