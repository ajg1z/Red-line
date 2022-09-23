import { FormField } from "../FormField/FormField.types";

export const RegisterFormFields: FormField[] = [
	{
		key: 1,
		label: "Дата рождения",
		name: "date",
		inputClassName: "date",
		type: "date",
	},
	{
		key: 2,
		label: "ФИО",
		name: "fullName",
		inputClassName: "fullName",
	},
	{
		key: 3,
		label: "Город",
		name: "city",
		inputClassName: "city",
	},
	{
		key: 4,
		label: "E-mail",
		name: "email",
		inputClassName: "email",
	},
	{
		key: 5,
		label: "Пароль",
		name: "password",
		inputClassName: "password",
	},
	{
		key: 6,
		label: "Подтвердите пароль",
		name: "confirmPassword",
		inputClassName: "confirmPassword",
	},
	{
		key: 7,
		label: "О себе",
		name: "description",
		inputClassName: "description",
		type: "textarea",
	},
	{
		key: 8,
		label: "Любимые книги",
		name: "favorites",
		inputClassName: "favorites",
		type: "textarea",
	},
	{
		key: 9,
		label: "Предпочитаемые жанры",
		name: "preferred",
		inputClassName: "preferred",
		type: "textarea",
	},
];
