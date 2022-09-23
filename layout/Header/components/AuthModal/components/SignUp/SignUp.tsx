import React from "react";
import styles from "./SignUp.module.css";
import { useForm, FormProvider } from "react-hook-form";
import FormField from "../FormField/FormField";
import { SignUpForm, SignUpProps } from "./SignUp.types";
import { Button } from "../../../../../../components";
import { RegisterFormFields } from "./SignUp.constans";
import { SignUpFormSchema } from "../validation/form-fields";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUp: React.FC<SignUpProps> = ({ stage, setStage }) => {
	const form = useForm<SignUpForm>({
		resolver: yupResolver(SignUpFormSchema),
	});

	const onSubmit = (form: SignUpForm) => {
		if (stage === 0) return;
		console.log(form);
	};

	function changeStage(direction: "prev" | "next") {
		if (direction === "prev") setStage(0);

		if (direction === "next") {
			if (form.formState.isValid) setStage(1);
		}
	}

	React.useEffect(() => {
		return () => {
			form.clearErrors();
		};
	}, []);

	const reducerContent = () => {
		if (stage === 0)
			return (
				<>
					{RegisterFormFields.slice(0, 6).map((field) => {
						return <FormField {...field} />;
					})}
				</>
			);

		if (stage === 1)
			return (
				<>
					{RegisterFormFields.slice(6).map((field) => {
						return <FormField {...field} />;
					})}
				</>
			);
	};

	return (
		<div className={styles.signUp}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormProvider {...form}>{reducerContent()}</FormProvider>
				<div className={styles.footer}>
					{stage === 1 && (
						<Button
							onClick={() => changeStage("prev")}
							type="button"
							className={styles.bttn}
						>
							Назад
						</Button>
					)}
					<Button
						onClick={() => {
							changeStage("next");
						}}
						className={styles.bttn}
					>
						{stage === 0 ? "Далее" : "Зарегестрироваться"}
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
