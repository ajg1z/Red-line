import React from "react";
import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.types";

export const Sidebar: React.FC<SidebarProps> = () => {
	return <aside className={styles.sidebar}>Sidebar</aside>;
};
