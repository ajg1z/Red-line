import React from "react";
import Input from "../Input/Input";
import styles from "./Search.module.css";
import { SearchProps } from "./Search.types";
import SearchIcon from "./search.svg";
import cn from "classnames";

const Search: React.FC<SearchProps> = ({
	className,
	placeholder,
	classInput,
	...args
}) => {
	return (
		<div className={cn(styles.search, className)} {...args}>
			<Input
				placeholder={placeholder}
				className={cn(styles.input, classInput)}
			/>
			<SearchIcon className={styles.searchIcon} />
		</div>
	);
};

export default Search;
