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
	const pagesCount = React.useMemo(() => {
		return Math.ceil(max / 10);
	}, [max]);
	return (
		<div className={cn(styles.container, className)} {...args}>
			<button
				disabled={page === 1}
				onClick={() => setPage(1)}
				className={cn(styles.bttn, styles.start)}
			>
				В начало
			</button>
			<ul className={styles.listPage}>
				{createArray(pagesCount)
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
				disabled={pagesCount === page}
				onClick={() => setPage(page + 1)}
				className={cn(styles.bttn, styles.end)}
			>
				Далее
			</button>
		</div>
	);
};
