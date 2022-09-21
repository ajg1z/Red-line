import cn from "classnames";
import React from "react";
import styles from "./Modal.module.css";
import { ModalProps } from "./Modal.types";
import ReactDOM from "react-dom";

export const Modal: React.FC<ModalProps> = ({
	className,
	children,
	hideCloseIcon,
	isOpen,
	...args
}) => {
	if (typeof document === "undefined") return <></>;

	React.useEffect(() => {
		if (isOpen) {
			document.querySelector("html")!.style.overflow = "hidden";
		} else document.querySelector("html")!.style.overflow = "";

		return () => {
			document.querySelector("html")!.style.overflow = "";
		};
	}, [isOpen]);

	return ReactDOM.createPortal(
		<div className={cn(styles.bg, { [styles.open]: isOpen })}>
			<div className={cn(styles.container, className)} {...args}>
				{!hideCloseIcon && <div className={styles.close}>+</div>}
				{children}
			</div>
		</div>,
		document.body
	);
};
