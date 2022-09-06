import React from "react";
import { HeaderProps } from "./Header.types";
import styles from "./Header.module.css";
import Link from "next/link";
import Search from "../../components/Search/Search";
import ArrowIcon from "./icons/arrow.svg";
import UserIcon from "./icons/user.svg";
import MenuIcon from "./icons/menu.svg";

export const MENU_ITEMS = [
	{ label: "Люди", link: `/users` },
	{ label: "Проза", link: `/prose` },
	{ label: "Стихи", link: `/poems` },
];

export const Header: React.FC<HeaderProps> = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h2 className={styles.logo}>RED-Line</h2>
				<Search
					placeholder="Поиск"
					classInput={styles.searchInput}
					className={styles.search}
				/>
				<nav className={styles.menu}>
					<ul className={styles.menuList}>
						{MENU_ITEMS.map((item) => {
							return (
								<li key={item.label} className={styles.menuItem}>
									<Link href={item.link}>
										<a>{item.label}</a>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
				<div className={styles.extraOptions}>
					Еще <ArrowIcon className={styles.arrowIcon} />
				</div>
				<div className={styles.profile}>
					<span>Войти</span>
					<UserIcon />
				</div>
				<button className={styles.mobMenu}>
					<MenuIcon />
				</button>
			</div>
		</header>
	);
};
