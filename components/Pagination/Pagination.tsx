import React from "react";
import styles from "./Pagination.module.css";
import { PaginationProps } from "./Pagination.types";
import cn from "classnames";
import { createArray } from "../../helpers/functions";

export const Pagination: React.FC<PaginationProps> = ({
	className,
	page,
	setPage,
	max,
	...args
}) => {
	return (
		<div className={cn(styles.container, className)}>
			<button
				onClick={() => setPage(1)}
				className={cn(styles.bttn, styles.start)}
			>
				В начало
			</button>
			<ul className={styles.listPage}>
				{createArray(max)
					.slice(page - 2 < 0 ? 0 : page - 2, page + 2)
					.map((pageIndex) => {
						return (
							<li key={pageIndex}>
								<button
									onClick={() => setPage(pageIndex + 1)}
									className={cn(styles.pageItem, {
										[styles.activePage]: pageIndex + 1 === page,
									})}
								>
									{pageIndex + 1}
								</button>
							</li>
						);
					})}
			</ul>
			<button
				onClick={() => setPage(page + 1)}
				className={cn(styles.bttn, styles.end)}
			>
				Далее
			</button>
		</div>
	);
};
