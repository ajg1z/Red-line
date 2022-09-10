import { DetailedHTMLProps, HTMLAttributes } from "react";
import { CommentItem } from "../../../../interfaces/comment.interface";

export interface CommentProps
	extends CommentItem,
		Omit<
			DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
			"id"
		> {}
