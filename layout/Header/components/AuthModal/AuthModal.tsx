import cn from "classnames";
import React from "react";
import { Button, Checkbox, Input, Modal } from "../../../../components";
import styles from "./AuthModal.module.css";
import { AuthModalProps, TypeAuth } from "./AuthModal.types";

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, setIsOpen }) => {
	const [typeAuth, setTypeAuth] = React.useState<TypeAuth>(TypeAuth.SignIn);

	const reducerContent = React.useMemo(() => {
		if (typeAuth === TypeAuth.SignIn)
			return (
				<div className={styles.signIn}>
					<Input className={styles.input} placeholder="E-mail" />
					<Input className={styles.input} placeholder="Пароль" />
					<Checkbox className={styles.checkbox} label="Запомнить меню" />
				</div>
			);
		return <div className={styles.signUp}></div>;
	}, [typeAuth]);

	function handleClose() {
		setIsOpen(false);
	}

	return (
		<Modal isOpen={isOpen} hideCloseIcon>
			<button onClick={handleClose} className={styles.close}>
				+
			</button>
			<div className={styles.top}>
				<div
					onClick={() => setTypeAuth(TypeAuth.SignIn)}
					className={cn(styles.left, {
						[styles.selected]: typeAuth === TypeAuth.SignIn,
					})}
				>
					Вход
				</div>
				<div
					onClick={() => setTypeAuth(TypeAuth.SignUp)}
					className={cn(styles.right, {
						[styles.selected]: typeAuth === TypeAuth.SignUp,
					})}
				>
					Регистрация
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.body}>{reducerContent}</div>
				<div className={styles.footer}>
					<Button className={styles.bttn}>
						{typeAuth === TypeAuth.SignIn ? "Войти" : "Зарегестрироваться"}
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default AuthModal;
