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
