import React from "react";
import { HeaderProps } from "./Header.types";
import styles from "./Header.module.css";
import Link from "next/link";
import Search from "../../components/Search/Search";
import ArrowIcon from "./icons/arrow.svg";
import UserIcon from "./icons/user.svg";
import MenuIcon from "./icons/menu.svg";
import cn from "classnames";
import { motion } from "framer-motion";

export const MENU_ITEMS = [
	{ label: "Люди", link: `/users` },
	{ label: "Проза", link: `/prose` },
	{ label: "Стихи", link: `/poems` },
];

export const Header: React.FC<HeaderProps> = () => {
	const [isShowMenu, setIsShowMenu] = React.useState(false);

	function handleToggleMenu() {
		setIsShowMenu(!isShowMenu);
	}

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
				<button className={styles.extraOptions}>
					Еще <ArrowIcon className={styles.arrowIcon} />
				</button>
				<div className={styles.profile}>
					<button>Войти</button>
					<UserIcon />
				</div>
				<button onClick={handleToggleMenu} className={styles.burger}>
					<MenuIcon />
				</button>
			</div>
			<div
				className={cn(styles.mobMenu, {
					[styles.openMenu]: isShowMenu,
				})}
			>
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
				<button className={cn(styles.extraOptions, styles.visibleOptions)}>
					Еще <ArrowIcon className={styles.arrowIcon} />
				</button>
				<div className={cn(styles.profile, styles.visibleProfile)}>
					<button>Войти</button>
				</div>
			</div>
		</header>
	);
};
