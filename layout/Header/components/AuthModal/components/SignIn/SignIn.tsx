import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../../../../../../components";
import FormField from "../FormField/FormField";
import { SignInFormFields } from "./SignIn.constans";
import styles from "./SignIn.module.css";
import { SignInForm } from "./SignIn.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInFormSchema } from "../validation/form-fields";

const SignIn = () => {
	const form = useForm<SignInForm>({
		resolver: yupResolver(SignInFormSchema),
	});

	const onSubmit = (form: SignInForm) => {
		console.log(form);
	};

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<FormProvider {...form}>
				{SignInFormFields.map((field) => {
					return <FormField {...field} />;
				})}
			</FormProvider>
			<Button className={styles.bttn}>Войти</Button>
		</form>
	);
};

export default SignIn;
