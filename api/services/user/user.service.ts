import { $api } from "../..";
import { Person } from "../../../interfaces/person.interface";

export default {
	async getUsers(query?: string) {
		const { data } = await $api.get<Person[]>(`/users${query ?? ""}`);
		return data;
	},
};
