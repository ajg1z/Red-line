import { HomeProps } from "./../page-components/Home/Home.types";
import { AppContextPayload } from "./../interfaces/app-context.interface";
import { ReactNode } from "react";
import { UsersPageProps } from "../page-components/Users";

export interface MainLayoutProps {
	children: ReactNode;
}

export interface LayoutProps
	extends AppContextPayload,
		HomeProps,
		UsersPageProps {
	[key: string]: unknown;
}
