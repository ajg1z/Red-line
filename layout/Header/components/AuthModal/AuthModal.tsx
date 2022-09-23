import cn from "classnames";
import React from "react";
import { Button, Checkbox, Input, Modal } from "../../../../components";
import styles from "./AuthModal.module.css";
import { AuthModalProps, TypeAuth } from "./AuthModal.types";
import FormField from "./components/FormField/FormField";
import { FormProvider } from "react-hook-form";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, setIsOpen }) => {
	const [typeAuth, setTypeAuth] = React.useState<TypeAuth>(TypeAuth.SignIn);
	const [stageRecord, setStateRecord] = React.useState<number>(0);

	const reducerContent = React.useMemo(() => {
		if (typeAuth === TypeAuth.SignUp)
			return <SignUp setStage={setStateRecord} stage={stageRecord} />;
		return <SignIn />;
	}, [typeAuth, stageRecord]);

	function handleClose() {
		setIsOpen(false);
		setStateRecord(0);
	}

	return (
		<Modal isOpen={isOpen} hideCloseIcon close={setIsOpen}>
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
			<div className={styles.content}>{reducerContent}</div>
		</Modal>
	);
};

export default AuthModal;
