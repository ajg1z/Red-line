import React from "react";
import { UserProps } from "./User.types";
import styles from "./User.module.css";
import { TopMenu } from "./constans";
import cn from "classnames";
import { Divider, Link, Title } from "../../components";
import UserInfo from "./components/UserInfo/UserInfo";
import UserIcon from "./user.svg";

const User: React.FC<UserProps> = ({ books, friends, user }) => {
	const [chapterMenu, setChapterMenu] = React.useState(1);
	return (
		<div className={styles.container}>
			<nav className={styles.topMenu}>
				<ul className={styles.menuList}>
					{TopMenu.map((menuItem) => {
						return (
							<li
								className={cn(styles.menuItem, {
									[styles.activeMenu]: menuItem.value === chapterMenu,
								})}
							>
								<button
									onClick={() => setChapterMenu(menuItem.value)}
									className={styles.menuButton}
								>
									{menuItem.label}
								</button>
							</li>
						);
					})}
				</ul>
			</nav>
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
						<button className={styles.addToFriend}>Добавить в друзья</button>
						<Divider />
						<button className={styles.complain}>Жалоба</button>
						<button className={styles.addToBlaclList}>Добавить в ЧС</button>
					</div>
					<div className={styles.right}>
						<p className={styles.fullName}>{user.info.fullName}</p>
						<p className={styles.rating}>
							Баллы <span>{user.rating}</span>
						</p>
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
							<UserInfo label="Предпочитаю" value={user.info.preferGenres} />
							<UserInfo label="Любимые книги" value={user.info.favoriteBooks} />
							<UserInfo label="О себе" value={user.info.description} />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.friends}>
				<div className={styles.topFriend}>
					<p className={styles.titleFriend}>Мои друзья</p>
				</div>
				<div className={styles.friendsList}>
					{friends.map((friend, index) => (
						<>
							<Link
								className={cn(styles.friend, { [styles.online]: index === 1 })}
								href={`/users/${friend.id}`}
							>
								<UserIcon className={styles.userIcon} />
								<span> {friend.name}</span>
							</Link>
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default User;
