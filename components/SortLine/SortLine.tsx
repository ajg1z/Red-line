import React from "react";
import { Radio } from "../Radio/Radio";
import styles from "./SortLine.module.css";
import { SortItemProps } from "./SortLine.types";

export const SortLine: React.FC<SortItemProps> = React.memo(
	({ label, options, value, name, setValue }) => {
		const handleChange = (value: any) => {
			setValue(value);
		};
		return (
			<ul className={styles.container}>
				<li>{label}</li>
				{options.map((option) => {
					return (
						<>
							<Radio
								onChange={() => handleChange(option.value)}
								name={name}
								checked={option.value === value}
								key={option.value}
								title={option.label}
							/>
						</>
					);
				})}
			</ul>
		);
	}
);
