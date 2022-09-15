import React from "react";
import styles from "./UserInfo.module.css";
import { UserInfoProps } from "./UserInfo.types";

const UserInfo: React.FC<UserInfoProps> = ({ label, value }) => {
	return (
		<div className={styles.container}>
			<p className={styles.labelInfo}>{label}:</p>
			<p className={styles.valueInfo}>{value || "не указано"}</p>
		</div>
	);
};

export default UserInfo;
