import { HomeProps } from "./../page-components/Home/Home.types";
import { AppContextPayload } from "./../interfaces/app-context.interface";
import { ReactNode } from "react";
import { UsersPageProps } from "../page-components/Users";
import { ProductsPageProps } from "../page-components/Products";

export interface MainLayoutProps {
	children: ReactNode;
}

export interface LayoutProps
	extends AppContextPayload,
		HomeProps,
		UsersPageProps,
		ProductsPageProps {
	[key: string]: unknown;
}
