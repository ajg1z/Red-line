import { BookPageProps } from "./../page-components/Book/Book.types";
import { HomeProps } from "./../page-components/Home/Home.types";
import { AppContextPayload } from "./../interfaces/app-context.interface";
import { ReactNode } from "react";
import { UsersPageProps } from "../page-components/Users";
import { ProductsPageProps } from "../page-components/Products";
import { UserPageProps } from "../page-components/User";
import { InfoPageProps } from "../page-components/Info";

export interface MainLayoutProps {
	children: ReactNode;
	notSidebar?: boolean;
}

export interface LayoutProps
	extends AppContextPayload,
		HomeProps,
		UsersPageProps,
		ProductsPageProps,
		UserPageProps,
		BookPageProps,
		InfoPageProps {
	[key: string]: unknown;
}
