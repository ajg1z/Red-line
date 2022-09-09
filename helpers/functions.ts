import { FormWorks } from "../global-constans";

export function isProse(value: string) {
	if (value !== FormWorks.Story && value !== FormWorks.Storybook) return true;
	return false;
}
