import { InitialBook } from "./../book.interface";
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FormWorks, FormWorksType } from "../../../../global-constans";

interface CountFormWorks {
	count: number;
}

export default (books: InitialBook[]) => {
	const formWorksMap: Map<FormWorksType, CountFormWorks> = new Map();
	books.forEach((book) => {
		if (!formWorksMap.get(book.formWork)) {
			formWorksMap.set(book.formWork, { count: 1 });
		} else formWorksMap.get(book.formWork)!.count += 1;
	});

	return Array.from(formWorksMap).map((formWork) => ({
		name: formWork[0] as FormWorks,
		count: formWork[1].count,
	}));
};
