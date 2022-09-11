import React from "react";
import { SortPeriod, TopProps } from "./Top.types";
import styles from "./Top.module.css";
import { Paragraph, Title } from "../../../../components";
import cn from "classnames";

const Top: React.FC<TopProps> = ({
	title,
	description,
	sortAction,
	sortTypes,
	sortLabel,
}) => {
	const [selected, setSelected] = React.useState(1);
	const handleSort = (value: number) => {
		setSelected(value);
		if (sortAction) {
			switch (value) {
				case 1:
					return sortAction(SortPeriod.Week);
				case 2:
					return sortAction(SortPeriod.Month);
				case 3:
					return sortAction(SortPeriod.AllTime);
				default:
					throw Error();
			}
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<Title className={styles.title} tag="h2">
					{title}
				</Title>
				{sortLabel && (
					<Paragraph className={styles.sortLabel}>{sortLabel}</Paragraph>
				)}
				{sortTypes && sortTypes.length && (
					<ul className={styles.sortTypes}>
						{sortTypes.map((type) => {
							return (
								<li
									key={type.value}
									className={cn(
										styles.sortType,
										selected === type.value && styles.activeSortType
									)}
								>
									<button onClick={() => handleSort(type.value)}>
										{type.label}
									</button>
								</li>
							);
						})}
					</ul>
				)}
			</div>

			{description && (
				<Paragraph className={styles.description}>{description}</Paragraph>
			)}
		</div>
	);
};

export default Top;
