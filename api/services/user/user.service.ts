import { $api } from "../..";
import { Person } from "../../../interfaces/person.interface";

export default {
	async getUsers(query?: string) {
		const { data } = await $api.get<Person[]>(`/users${query ?? ""}`);
		return data;
	},
	async getUsersCount() {
		const { headers } = await $api.get<number>(`/users?_start=0&_end=0`);
		if (headers["x-total-count"]) return +headers["x-total-count"];
		return 0;
	},
	async getUser(id: string) {
		const { data } = await $api.get<Person>(`/users/${id}`);
		return data;
	},
};
