import React from "react";
import styles from "./Textarea.module.css";
import { TextareaProps } from "./Textarea.types";
import cn from "classnames";

export const Textarea = React.forwardRef(
	(
		{ className, label, labelClass, scroll, error, ...args }: TextareaProps,
		ref: React.ForwardedRef<HTMLTextAreaElement>
	) => {
		const id = new Date().getTime().toString();
		return (
			<div className={styles.container}>
				{label && (
					<label className={cn(labelClass, styles.label)} htmlFor={id}>
						{label}
					</label>
				)}
				<textarea
					id={id}
					ref={ref}
					onInput={(e) => {
						if (scroll) return;
						e.currentTarget.style.height = "auto";
						e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
					}}
					className={cn(styles.textarea, className, {
						[styles.onScroll]: scroll,
						[styles.error]: !!error,
					})}
					{...args}
				/>
			</div>
		);
	}
);
