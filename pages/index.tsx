import type { NextPage } from "next";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { MainLayout } from "../layout/layout";
import HomePage from "../page-components/Home/Home";

const Home: NextPage = () => {
	return (
		<MainLayout>
			<HomePage comments={0} readed={0} users={0} works={0} />
		</MainLayout>
	);
};

export default Home;
