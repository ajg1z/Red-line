import React from "react";
import { SortItemProps } from "./SortItem.types";
import styles from "./SortItem.module.css";
import { Radio } from "../../../../components";

const SortItem: React.FC<SortItemProps> = ({
	label,
	options,
	value,
	name,
	setValue,
}) => {
	const handleChange = (value: string | null) => {
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
};

export default SortItem;
