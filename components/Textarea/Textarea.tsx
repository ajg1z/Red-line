import React from "react";
import styles from "./Textarea.module.css";
import { TextareaProps } from "./Textarea.types";
import cn from "classnames";

export const Textarea = React.forwardRef(
	(
		{ className, ...args }: TextareaProps,
		ref: React.ForwardedRef<HTMLTextAreaElement>
	) => {
		return (
			<textarea
				ref={ref}
				onInput={(e) => {
					e.currentTarget.style.height = "auto";
					e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
				}}
				className={cn(styles.textarea, className)}
				{...args}
			/>
		);
	}
);
