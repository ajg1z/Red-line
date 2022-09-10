import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { Url } from "url";

export interface LinkProps
	extends DetailedHTMLProps<
		Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
		HTMLAnchorElement
	> {
	children: ReactNode;
	href: Partial<Url> | string;
}
