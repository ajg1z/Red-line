import { HomeProps } from "./../page-components/Home/Home.types";
import { AppContextPayload } from "./../interfaces/app-context.interface";
import { ReactNode } from "react";

export interface MainLayoutProps {
	children: ReactNode;
}

export interface LayoutProps extends AppContextPayload, HomeProps {
	[key: string]: unknown;
}
