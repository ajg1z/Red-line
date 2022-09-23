import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface TextareaProps
	extends DetailedHTMLProps<
		TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	label?: string;
	labelClass?: string;
	scroll?: boolean;
	error?: Omit<FieldError, "type">;
}
