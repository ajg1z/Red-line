import React from "react";
import styles from "./Users.module.css";
import { UsersProps } from "./Users.types";
import cn from "classnames";
import {
	Divider,
	Pagination,
	Paragraph,
	PersonCard,
	Search,
	Title,
} from "../../components";
import SortItem from "./components/SortItem/SortItem";
import { Api } from "../../api";
import { getBeginWtiteYear, getTimeOnSite } from "./helpers/query-handle";
import { SearchBeginWrite, SearchInSiteOptions, SortOptions } from "./constans";
import { Person } from "../../interfaces/person.interface";

const Users: React.FC<UsersProps> = ({ users: usersProps, usersCount }) => {
	const [limit, setLimit] = React.useState(10);
	const [page, setPage] = React.useState(1);

	const [inSite, setInSite] = React.useState<string | null>(null);
	const [beginWrite, setBeginWrite] = React.useState<string | null>(null);
	const [search, setSearch] = React.useState("");
	const [sort, setSort] = React.useState<string | null>("rating");

	const [users, setUsers] = React.useState<Person[]>(usersProps);

	const hanldeSearchUsers = async () => {
		const beginWriteParams = getBeginWtiteYear(beginWrite);
		const inSiteParams = getTimeOnSite(inSite);
		try {
			const response = await Api.userService.getUsers(
				`?${beginWriteParams}${inSiteParams}${
					search ? `q=${search}&` : ""
				}_sort=${sort}&_order=desc&_limit=${limit}&_page=${page}`
			);
			// eslint-disable-next-line no-debugger
			setUsers(response);
		} catch (e) {
			console.log(e);
		}
	};

	React.useEffect(() => {
		hanldeSearchUsers();
	}, [beginWrite, inSite, sort, page]);

	return (
		<div className={cn(styles.container)}>
			<Title className={styles.title} tag="h1">
				Пользователи
			</Title>
			<div className={styles.sortOptions}>
				<Search
					onChangeInput={setSearch}
					onClick={hanldeSearchUsers}
					placeholder="Поиск по словам"
					className={styles.search}
				/>
				<SortItem
					name="sort"
					setValue={setSort}
					value={sort}
					label="Сортировка:"
					options={SortOptions}
				/>
				<SortItem
					name="beginWrite"
					setValue={setBeginWrite}
					value={beginWrite}
					label="С какого года пишу:"
					options={SearchBeginWrite}
				/>
				<SortItem
					name="inSite"
					setValue={setInSite}
					value={inSite}
					label="На сайте:"
					options={SearchInSiteOptions}
				/>
			</div>
			<div className={styles.users}>
				{users.map((user) => {
					return (
						<>
							<PersonCard {...user} key={user.id} />
							<Divider margin={15} />
						</>
					);
				})}
			</div>
			<Pagination max={usersCount} page={page} setPage={setPage} />
		</div>
	);
};

export default Users;
