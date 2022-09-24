import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FormFieldProps
	extends Omit<
			DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
			"key"
		>,
		FormField {
	tabIndex?: number;
}

export interface FormField {
	name: string;
	key: string | number;
	label?: string;
	type?: FormFieldType;
	inputClassName?: string;
}

export type FormFieldType =
	| "input"
	| "date"
	| "radio"
	| "checkbox"
	| "textarea";
