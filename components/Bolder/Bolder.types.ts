import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface BolderProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	children: ReactNode;
}
