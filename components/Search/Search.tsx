import React from "react";
import { Input } from "../Input/Input";
import styles from "./Search.module.css";
import { SearchProps } from "./Search.types";
import SearchIcon from "./search.svg";
import cn from "classnames";
import { Keys } from "../../global-constans";

export const Search: React.FC<SearchProps> = ({
	className,
	placeholder,
	classInput,
	onChangeInput,
	value,
	onClick,
	...args
}) => {
	const handleKeyDown = (key: React.KeyboardEvent) => {
		if (key.code === Keys.Space || key.code === Keys.Enter) {
			onClick();
			key.preventDefault();
		}
	};
	return (
		<div className={cn(styles.search, className)} {...args}>
			<Input
				onKeyDown={handleKeyDown}
				onChange={(e) => onChangeInput(e.target.value)}
				placeholder={placeholder}
				value={value}
				className={cn(styles.input, classInput)}
			/>
			<SearchIcon onClick={onClick} className={styles.searchIcon} />
		</div>
	);
};
