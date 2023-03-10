import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ModalProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	isOpen: boolean;
	hideCloseIcon?: boolean;
	close: (arg: boolean) => void;
}
