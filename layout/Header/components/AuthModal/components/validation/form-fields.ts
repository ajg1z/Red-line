import { string, object, ref, mixed } from "yup";

const RequiredFieldText = "Это поле обязательное";

export const SignInFormSchema = object().shape({
	email: string().email("Неверная почта").required("Почта обязательна"),
	password: string()
		.min(6, "Пароль должен быть не менее 6 символов")
		.max(25, "Пароль должен содержать не более 25 символов")
		.required(RequiredFieldText),
});

export const SignUpFormSchema = object()
	.shape({
		fullName: string()
			.min(4, "Минимум 4 символа")
			.max(55, "Максимум 55 символов")
			.required(RequiredFieldText),
		date: string().required(RequiredFieldText),
		city: string(),
		confirmPassword: string()
			.required(RequiredFieldText)
			.oneOf([ref("password"), null], "Пароли должны совпадать"),
		description: mixed(),
		favorites: mixed(),
		preferred: mixed(),
	})
	.concat(SignInFormSchema);
