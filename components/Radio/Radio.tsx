/* eslint-disable no-debugger */
import React, { ForwardedRef } from "react";
import styles from "./Radio.module.css";
import { RadioProps } from "./Radio.types";
import { v4 } from "uuid";
import cn from "classnames";
import { Keys } from "../../global-constans";

export const Radio = React.forwardRef(
	(
		{ className, label, reverse, checked, ...args }: RadioProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		const labelRef = React.useRef<HTMLLabelElement | null>(null);
		const handleKeyDown = (key: React.KeyboardEvent) => {
			if (key.code === Keys.Space || key.code === Keys.Enter) {
				if (labelRef.current) labelRef.current?.click();
				key.preventDefault();
			}
		};

		return (
			<label ref={labelRef} className={cn(styles.container, className)}>
				<input
					checked={checked}
					ref={ref}
					className={styles.input}
					type="radio"
					{...args}
				/>
				<span className={styles.check}>
					<span
						className={cn(styles.checked, {
							[styles.active]: checked,
						})}
					/>
				</span>
				<span tabIndex={0} onKeyDown={handleKeyDown} className={styles.text}>
					{label}
				</span>
			</label>
		);
	}
);
