import React from "react";
import { FormFieldProps } from "./FormField.types";
import styles from "./FormField.module.css";
import { useFormContext, Controller } from "react-hook-form";
import { Checkbox, Input, Textarea } from "../../../../../../components";
import cn from "classnames";

const FormField: React.FC<FormFieldProps> = ({
	label,
	name,
	type = "input",
	inputClassName,
	className,
	key,
	...args
}) => {
	const {
		register,
		formState: { errors },
		control,
	} = useFormContext();

	const reducerField = () => {
		switch (type) {
			case "input":
				return (
					<Input
						{...register(name)}
						label={label}
						error={errors[name]}
						className={cn(inputClassName, styles.input)}
					/>
				);
			case "date":
				return (
					<Input
						type={"date"}
						{...register(name)}
						label={label}
						error={errors[name]}
						className={cn(inputClassName, styles.input)}
					/>
				);
			case "checkbox":
				return (
					<Controller
						name={name}
						control={control}
						render={({ field }) => {
							return (
								<Checkbox
									{...field}
									label={label}
									error={errors[name]}
									className={cn(inputClassName, styles.checkbox)}
								/>
							);
						}}
					/>
				);
			case "textarea":
				return (
					<Textarea
						scroll
						error={errors[name]}
						{...register(name)}
						className={cn(inputClassName, styles.textarea)}
						label={label}
					/>
				);
			default:
				return <></>;
		}
	};

	return (
		<div className={cn(styles.container, className)} {...args}>
			{reducerField()}
		</div>
	);
};

export default FormField;
