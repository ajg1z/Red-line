import React, { ReactNode } from "react";
import { BookChard } from "../interfaces/book.interface";
import { CommentItem } from "../interfaces/comment.interface";
import { AppContextPayload } from "../interfaces/app-context.interface";

export const AppContext = React.createContext<AppContextPayload>({
	lastComments: [],
	promotedBooks: [],
});

interface AppContextProviderProps {
	children: ReactNode;
	lastComments: CommentItem[];
	promotedBooks: BookChard[];
}

export const AppContextProvider = ({
	children,
	lastComments,
	promotedBooks,
}: AppContextProviderProps): JSX.Element => {
	return (
		<AppContext.Provider value={{ lastComments, promotedBooks }}>
			{children}
		</AppContext.Provider>
	);
};
