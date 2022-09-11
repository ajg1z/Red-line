import React, { ForwardedRef } from "react";
import styles from "./Radio.module.css";
import { RadioProps } from "./Radio.types";
import { v4 } from "uuid";
import cn from "classnames";
import { Keys } from "../../global-constans";

export const Radio = React.forwardRef(
	(
		{ className, title, reverse, ...args }: RadioProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		const inputRef = React.useRef<HTMLInputElement | null>(null);
		const id = React.useMemo(() => v4(), []);
		const handleKeyDown = (key: React.KeyboardEvent) => {
			if (key.code === Keys.Space || key.code === Keys.Enter) {
				if (inputRef.current) inputRef.current?.click();
				key.preventDefault();
			}
		};
		return (
			<div
				ref={ref}
				className={cn(styles.container, reverse && styles.reverse)}
			>
				<input
					ref={inputRef}
					type="radio"
					className={cn(styles.radio, className)}
					{...args}
					id={id}
				/>
				<label
					tabIndex={0}
					onKeyDown={handleKeyDown}
					htmlFor={id}
					className={styles.label}
				>
					{title}
				</label>
			</div>
		);
	}
);
