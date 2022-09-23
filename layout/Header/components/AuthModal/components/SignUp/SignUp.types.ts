export interface SignUpProps {
	stage: number;
	setStage: (arg: number) => void;
}

export interface SignUpForm {
	date: string;
	fullName: string;
	city: string;
	email: string;
	password: string;
	confirmPassword: string;
	description: string;
	favorites: string;
	preferred: string;
}
