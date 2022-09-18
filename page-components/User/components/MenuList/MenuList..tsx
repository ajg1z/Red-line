import cn from "classnames";
import React from "react";
import styles from "./MenuList.module.css";
import { MenuListProps } from "./MenuList.types";

const MenuList: React.FC<MenuListProps> = ({
	activeValue,
	options,
	setMenu,
	className,
	...args
}) => {
	const handleSetMenu = (value: string | number) => {
		if (setMenu) setMenu(value);
	};
	return (
		<ul className={cn(styles.menuList, className)} {...args}>
			{options.map((option) => {
				return (
					<li
						className={cn(styles.menuItem, {
							[styles.activeMenu]: option.value === activeValue,
						})}
						key={option.value}
					>
						<button
							className={styles.menuButton}
							onClick={() => handleSetMenu(option.value)}
						>
							{option.label}
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default MenuList;
