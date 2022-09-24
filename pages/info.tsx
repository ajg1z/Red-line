import { GetStaticProps, NextPage } from "next";
import React from "react";
import { withLayout } from "../layout/layout";
import { InfoPageProps } from "../page-components/Info";
import Info from "../page-components/Info/Info";

const InfoPage: NextPage<InfoPageProps> = () => {
	return <Info />;
};

export const getStaticProps: GetStaticProps<InfoPageProps> = () => {
	return {
		props: {
			notSidebar: true,
		},
	};
};

export default withLayout(InfoPage);
