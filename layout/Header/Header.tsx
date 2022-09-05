import React from "react";
import { HeaderProps } from "./Header.types";
import styles from "./Header.module.css";

export const Header: React.FC<HeaderProps> = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h2 className={styles.logo}>RED-Line</h2>
			</div>
		</header>
	);
};
