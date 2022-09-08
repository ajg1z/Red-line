import React from "react";
import styles from "./Paragraph.module.css";
import { ParagraphProps } from "./Paragraph.types";
import cn from "classnames";

const Paragraph: React.FC<ParagraphProps> = ({
	className,
	children,
	...args
}) => {
	return (
		<p className={cn(className, styles.paragraph)} {...args}>
			{children}
		</p>
	);
};

export default Paragraph;
