import { Category, FormWorks } from "./../../global-constans";
import { BaseOptions } from "../../helpers/common-types";
import { SortProductEnum, СompletenessProductEnum } from "./Products.types";

export const SortOptions: BaseOptions<string, SortProductEnum>[] = [
	{ label: "лучшие", value: SortProductEnum.Best },
	{ label: "новые", value: SortProductEnum.New },
];

export const CategoryOptions: BaseOptions<string, Category>[] = [
	{ label: "Все категории", value: Category.AllCategory },
	{ label: "Лирика", value: Category.Lyrics },
	{ label: "Поэзия", value: Category.Poetry },
	{ label: "Абсурд", value: Category.Absurd },
	{ label: "Альтернатива", value: Category.Alternative },
	{ label: "Боевик", value: Category.SmashHit },
	{ label: "Военная проза", value: Category.MilitaryProse },
	{ label: "Детектив", value: Category.Detective },
	{ label: "Детская", value: Category.Childrens },
	{ label: "Документация", value: Category.Documentation },
	{ label: "Драматургия", value: Category.Dramaturgy },
	{ label: "Естествознание", value: Category.NaturalScience },
	{ label: "Изобретательство", value: Category.Invention },
	{ label: "История", value: Category.History },
	{ label: "Киберпанк", value: Category.Cyberpunk },
	{ label: "Критика", value: Category.Criticism },
	{ label: "Литообзор", value: Category.Lithoobservation },
	{ label: "Любовный роман", value: Category.LoveStory },
	{ label: "Мемуар", value: Category.Memoir },
	{ label: "Мистик", value: Category.Mystic },
	{ label: "Оккультизм", value: Category.Occultism },
	{ label: "Пародия", value: Category.Parody },
	{ label: "Политика", value: Category.Politics },
	{ label: "Постапокалипсис", value: Category.PostApocalypse },
	{ label: "Постмодернизм", value: Category.Postmodernism },
	{ label: "Приключения", value: Category.Adventure },
	{ label: "Проза", value: Category.Prose },
	{ label: "Психология", value: Category.Psychology },
	{ label: "Публицистика", value: Category.Journalism },
	{ label: "Реализм", value: Category.Realism },
	{ label: "Религия", value: Category.Religion },
	{ label: "Сказка", value: Category.FairyTale },
	{ label: "Событие", value: Category.Event },
	{ label: "Стимпанк", value: Category.Steampunk },
	{ label: "Сюрреализм", value: Category.Surrealism },
	{ label: "Фантастика", value: Category.Fantasy },
	{ label: "Философия", value: Category.Philosophy },
	{ label: "Фентези", value: Category.Fantasy },
	{ label: "Хоррор", value: Category.Horror },
	{ label: "Черный юмор", value: Category.BlackHumor },
	{ label: "Эзотерика", value: Category.Esoterics },
	{ label: "Эпос", value: Category.Epic },
	{ label: "Еротика", value: Category.Erotica },
	{ label: "Юмор", value: Category.Humor },
	{ label: "Другое", value: Category.Other },
];

export const СompletenessOptions: BaseOptions<
	string,
	СompletenessProductEnum
>[] = [
	{
		label: "завершенный",
		value: СompletenessProductEnum.Completed,
	},
	{
		label: "незавершенный",
		value: СompletenessProductEnum.InComplete,
	},
];

export const FormWorksOptions: BaseOptions<string, FormWorks>[] = [
	{
		label: "Все формы",
		value: FormWorks.AllWorks,
	},
	{
		label: "Рассказ",
		value: FormWorks.Story,
	},
	{
		label: "Роман",
		value: FormWorks.Affair,
	},
	{
		label: "Cборник рассказов",
		value: FormWorks.Storybook,
	},
	{
		label: "Поема",
		value: FormWorks.Poem,
	},
	{
		label: "Сборник стихов",
		value: FormWorks.PoetryCollection,
	},
	{
		label: "Эссе",
		value: FormWorks.Essay,
	},
	{
		label: "Статья",
		value: FormWorks.Article,
	},
	{
		label: "Монография",
		value: FormWorks.Monograph,
	},
	{
		label: "Справочник",
		value: FormWorks.Manual,
	},
	{
		label: "Песня",
		value: FormWorks.Song,
	},
	{
		label: "Новелла",
		value: FormWorks.Novel,
	},
	{
		label: "Трагедия",
		value: FormWorks.Tragedy,
	},
	{
		label: "Эпопея",
		value: FormWorks.Epic,
	},
	{
		label: "Другое",
		value: FormWorks.Another,
	},
];
