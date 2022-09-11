import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Person } from "../../interfaces/person.interface";

export interface PersonProps
	extends Omit<
			DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
			"id"
		>,
		Person {}
