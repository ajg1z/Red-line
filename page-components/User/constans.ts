import { BaseOptions } from "./../../helpers/common-types";
import { MenuBooks, MyWorksType } from "./User.types";
export const TopMenu: BaseOptions<string, number>[] = [
	{ label: "Аккаунт", value: 1 },
	{ label: "Почта", value: 2 },
	{ label: "Лента", value: 3 },
	{ label: "Кабинет", value: 4 },
];

export const MyWorksOptions: BaseOptions<string, MyWorksType>[] = [
	{ label: "Мои книги", value: MyWorksType.MyBooks },
	{ label: "Мой блог", value: MyWorksType.MyBlogs },
];
