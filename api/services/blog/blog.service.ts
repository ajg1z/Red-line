import { Blog } from "./../../../interfaces/blog.interface";
import { $api } from "../..";

export default {
	async getBlogs(query?: string) {
		const { data } = await $api.get<Blog[]>(`/blogs${query ?? ""}`);
		return data;
	},

	async getBlogsCount() {
		const { headers } = await $api.get<number>(`/blogs?_start=0&_end=0`);
		if (headers["x-total-count"]) return +headers["x-total-count"];
		return 0;
	},
};
