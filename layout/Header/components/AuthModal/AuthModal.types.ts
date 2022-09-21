export enum TypeAuth {
	SignUp = "sign-up",
	SignIn = "sign-in",
}

export interface AuthModalProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
