import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Blog } from "../../interfaces/blog.interface";

export interface BlogCardProps
	extends Omit<
			DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
			"id"
		>,
		Blog {}
