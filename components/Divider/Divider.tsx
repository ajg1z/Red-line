import React, { ForwardedRef } from "react";
import { DividerProps } from "./Divider.types";
import styles from "./Divider.module.css";
import cn from "classnames";

const Divider = React.forwardRef(
	(
		{ className, margin, ...args }: DividerProps,
		ref: ForwardedRef<HTMLHRElement>
	) => {
		return (
			<hr
				style={{
					marginBottom: margin || 10,
					marginTop: margin || 10,
				}}
				ref={ref}
				className={cn(styles.divider, className)}
				{...args}
			/>
		);
	}
);

export default Divider;
