import React from "react";
import { TopProps } from "./Top.types";
import styles from "./Top.module.css";
import Title from "../../../../components/Title/Title";
import Paragraph from "../../../../components/Paragraph/Paragraph";

const Top: React.FC<TopProps> = ({
	title,
	description,
	sortAction,
	sortTypes,
	sortLabel,
}) => {
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
								<li key={type.value} className={styles.sortType}>
									<button>{type.label}</button>
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
