import React from "react";
import { HeaderProps } from "./Header.types";
import styles from "./Header.module.css";
import Link from "next/link";
import ArrowIcon from "./icons/arrow.svg";
import UserIcon from "./icons/user.svg";
import MenuIcon from "./icons/menu.svg";
import cn from "classnames";
import { Search } from "../../components";
import { Pages } from "../../global-constans";
import AuthModal from "./components/AuthModal/AuthModal";
import { useRouter } from "next/router";

export const MENU_ITEMS = [
	{ label: "Люди", link: Pages.Users },
	{ label: "Произведения", link: Pages.Books },
];

export const Header: React.FC<HeaderProps> = () => {
	const [isShowMenu, setIsShowMenu] = React.useState(false);
	const [search, setSearch] = React.useState("");
	const router = useRouter();
	const [isOpen, setIsOpen] = React.useState(false);

	function handleToggleMenu() {
		setIsShowMenu(!isShowMenu);
	}

	function toSearchPage() {
		if (!search) return;
		router.push({
			pathname: Pages.Search,
			query: { q: search },
		});
	}

	return (
		<header className={styles.header}>
			<AuthModal isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className={styles.container}>
				<h2 className={styles.logo}>
					<Link href={"/"}>RED-Line</Link>
				</h2>
				<Search
					onChangeInput={setSearch}
					onClick={toSearchPage}
					value={search}
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
				<div onClick={() => setIsOpen(true)} className={styles.profile}>
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
				<div
					onClick={() => setIsOpen(true)}
					className={cn(styles.profile, styles.visibleProfile)}
				>
					<button>Войти</button>
				</div>
			</div>
		</header>
	);
};
