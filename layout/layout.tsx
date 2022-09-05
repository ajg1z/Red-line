import React from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import styles from "./layout.module.css";
import { MainLayoutProps } from "./layout.types";
import { Sidebar } from "./Sidebar/Sidebar";

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<Sidebar />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
};
