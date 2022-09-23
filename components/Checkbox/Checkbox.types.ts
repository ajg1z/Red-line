import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface CheckboxProps
	extends Omit<
		DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		"size"
	> {
	label?: string;
	size?: "small" | "middle";
	error?: Omit<FieldError, "type">;
}
