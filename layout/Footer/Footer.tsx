import React from "react";
import { FooterProps } from "./Footer.types";
import styles from "./Footer.module.css";

export const Footer: React.FC<FooterProps> = () => {
	return <footer className={styles.footer}>Footer</footer>;
};
