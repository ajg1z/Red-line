import React from "react";
import { FooterProps } from "./Footer.types";
import styles from "./Footer.module.css";
import { Link, Paragraph } from "../../components";
import { BaseOptions } from "../../helpers/common-types";
import { Pages } from "../../global-constans";

export const FooterMenuLinks: BaseOptions[] = [
	{ label: "Главная", value: Pages.Home },
	{ label: "Профиль", value: Pages.Personal },
	{ label: "Иноформация", value: Pages.Info },
	{ label: "Писатели", value: Pages.Users },
	{ label: "Проза", value: Pages.Prose },
	{ label: "Стихи", value: Pages.Poem },
];

export const Footer: React.FC<FooterProps> = () => {
	return (
		<footer className={styles.footer}>
			<nav className={styles.menu}>
				<ul className={styles.menuList}>
					{FooterMenuLinks.map((link) => {
						return (
							<li key={link.value} className={styles.link}>
								<Link href={link.value}>{link.label}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
			<Paragraph className={styles.text}>
				Авторские права на произведения принадлежат авторам и охраняются
				законом. Перепечатка произведений возможна только с согласия его автора,
				к которому вы можете обратиться на его авторской странице.
			</Paragraph>
		</footer>
	);
};
