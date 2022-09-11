import React from "react";
import { Input } from "../Input/Input";
import styles from "./Search.module.css";
import { SearchProps } from "./Search.types";
import SearchIcon from "./search.svg";
import cn from "classnames";

export const Search: React.FC<SearchProps> = ({
	className,
	placeholder,
	classInput,
	onChangeInput,
	value,
	onClick,
	...args
}) => {
	return (
		<div className={cn(styles.search, className)} {...args}>
			<Input
				onChange={(e) => onChangeInput(e.target.value)}
				placeholder={placeholder}
				value={value}
				className={cn(styles.input, classInput)}
			/>
			<SearchIcon onClick={onClick} className={styles.searchIcon} />
		</div>
	);
};
