import { $api } from "../..";
import { CommentItem } from "../../../interfaces/comment.interface";

export default {
	async getComments(query?: string) {
		const { data } = await $api.get<CommentItem[]>(`/comments${query ?? ""}`);
		return data;
	},
};
