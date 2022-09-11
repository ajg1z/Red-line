import { Person } from "../../interfaces/person.interface";
import { SidebarData } from "../../layout/Sidebar/Sidebar.types";

export interface UsersProps {
	users: Person[];
}

export interface UsersPageProps extends SidebarData {
	users: Person[];
}
