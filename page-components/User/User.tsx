import React, { Fragment } from "react";
import {
	BooksMenuOptions,
	MenuBooks,
	MyWorksType,
	UserProps,
} from "./User.types";
import styles from "./User.module.css";
import { MyWorksOptions, TopMenu } from "./constans";
import cn from "classnames";
import { BookCard, Button, Divider, Link, Tag, Title } from "../../components";
import UserInfo from "./components/UserInfo/UserInfo";
import UserIcon from "./user.svg";
import getFormWorks from "../../api/services/book/helpers/getFormWorks";
import { FormWorks, FormWorksType } from "../../global-constans";
import { BaseOptions } from "../../helpers/common-types";
import MenuList from "./components/MenuList";
import Works from "./components/Works";
import { useRouter } from "next/router";
import Cabinet from "./components/chaptersMenu/Cabinet";
import { TagColors } from "../../components/Tag/Tag.types";

const User: React.FC<UserProps> = ({
	books,
	friends,
	user,
	booksCount,
	genres,
}) => {
	const router = useRouter();
	const [chapterMenu, setChapterMenu] = React.useState<number | string>(1); // string чтобы типы не ругались
	React.useEffect(() => {
		setChapterMenu(1);
	}, [router]);

	const contentReducer = React.useMemo(() => {
		switch (chapterMenu) {
			case 1:
				return (
					<>
						<div className={styles.profile}>
							<div className={styles.topProfile}>
								<Title className={styles.name} tag="h2">
									{user.name}
								</Title>
								<p className={styles.lastOnline}>08:52 15.09.2022</p>
							</div>
							<div className={styles.content}>
								<div className={styles.left}>
									<div className={styles.mockImage}></div>
									<button className={styles.write}>Написать</button>
									<button className={styles.addToFriend}>
										Добавить в друзья
									</button>
									<Divider />
									<button className={styles.complain}>Жалоба</button>
									<button className={styles.addToBlaclList}>
										Добавить в ЧС
									</button>
								</div>
								<div className={styles.right}>
									<p className={styles.fullName}>{user.info.fullName}</p>
									<Tag className={styles.rating} bgColor={TagColors.Green}>
										Баллы <span>{user.rating}</span>
									</Tag>
									{user.info.beginWrite && (
										<p className={styles.beginWrite}>
											Пишу с {user.info.beginWrite} года
										</p>
									)}
									<button className={styles.showStat}>Статистика</button>
									<div className={styles.statistics}></div>
									<Divider />
									<div className={styles.userInfo}>
										<UserInfo label="Возраст" value={user.info.age} />
										<UserInfo label="Город" value={user.info.city} />
										<UserInfo
											label="Предпочитаю"
											value={user.info.preferGenres}
										/>
										<UserInfo
											label="Любимые книги"
											value={user.info.favoriteBooks}
										/>
										<UserInfo label="О себе" value={user.info.description} />
									</div>
								</div>
							</div>
						</div>
						<div className={styles.friends}>
							<MenuList
								options={[{ label: "Мои друзья", value: 1 }]}
								activeValue={1}
							/>
							<div className={styles.friendsList}>
								{friends.map((friend, index) => (
									<>
										<Link
											key={friend.id}
											className={cn(styles.friend, {
												[styles.online]: index === 1,
											})}
											href={`/users/${friend.id}`}
										>
											<UserIcon className={styles.userIcon} />
											<span> {friend.name}</span>
										</Link>
									</>
								))}
							</div>
						</div>
						<Works
							genresProps={genres}
							bookProps={books.filter((book) => book.isPublished && book.show)}
							booksCount={booksCount}
							user={user}
						/>
					</>
				);
			case 2:
				return <></>;
			case 3:
				return <></>;
			case 4:
				return <Cabinet books={books} />;
			default:
				return <></>;
		}
	}, [chapterMenu]);

	return (
		<div className={styles.container}>
			<MenuList
				className={styles.topMenu}
				activeValue={chapterMenu}
				options={TopMenu}
				setMenu={setChapterMenu}
			/>

			{contentReducer}
		</div>
	);
};

export default User;
