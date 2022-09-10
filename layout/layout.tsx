import React from "react";
import { AppContextProvider } from "../contexts/app-context";
import { AppContextPayload } from "../interfaces/app-context.interface";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import styles from "./layout.module.css";
import { LayoutProps, MainLayoutProps } from "./layout.types";
import { Sidebar } from "./Sidebar/Sidebar";

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.layout}>
				<main className={styles.main}>{children}</main>
				<Sidebar />
			</div>
			<Footer />
		</div>
	);
};

export const withLayout = <T extends LayoutProps>(Component: React.FC<T>) => {
	return function withLayoutComponent(props: T) {
		return (
			<AppContextProvider
				lastComments={props.lastComments}
				promotedBooks={props.promotedBooks}
			>
				<MainLayout>
					<Component {...props} />
				</MainLayout>
			</AppContextProvider>
		);
	};
};
