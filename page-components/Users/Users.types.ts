import { Person } from "../../interfaces/person.interface";
import { SidebarData } from "../../layout/Sidebar/Sidebar.types";

export interface UsersProps {
	users: Person[];
	usersCount: number;
}

export interface UsersPageProps extends SidebarData {
	users: Person[];
	usersCount: number;
}

export enum SortUsersEnum {
	Rating = "rating",
	CreatedAt = "createdAt",
}

export enum BeginWriteEnum {
	Null = "",
	Year_2016 = "2016",
	Year_2015 = "2016",
	Year_2014 = "2016",
	Year_2013 = "2016",
	Years_2001_2012 = "2001-2012",
	Years_before_2000 = "before",
}

export enum InSiteEnum {
	Null = "",
	Month = "month",
	Month_3 = "three-month",
	Month_6 = "six-month",
	Year = "year",
}
