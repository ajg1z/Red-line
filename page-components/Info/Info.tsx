import React from "react";
import {} from "./Info.types";
import styles from "./Info.module.css";
import cn from "classnames";

const Info = () => {
	const MenuOptions = ["FAQ", "Написать", "Правило"];

	const [menu, setMenu] = React.useState(0);

	const reducerContent = React.useMemo(() => {
		switch (menu) {
			case 0:
				return (
					<>
						<h2>Для чего этот сайт?</h2>
						<p>
							Сайт для творческих людей, а именно для тех, кто пишет стихи,
							рассказы, повести и т.п. Здесь вы можете приступить к написанию
							собственного произведения, чтобы его прочитали, оценили и
							прокомментировали.
						</p>
						<h2>
							Можно ли заработать реальные деньги на своей книге на вашем сайте,
							например, продавая ее?
						</h2>
						<p>
							Нет. Сайт для тех, кто хочет поделиться своим творчеством с
							другими писателями и читателями бесплатно.
						</p>
						<h2>
							Мою книгу не оценивают / не комментируют / не читают. Что делать?
						</h2>
						<p>
							Читайте, оценивайте и комментируйте произведения других авторов!
							Они, как и вы, тоже этого хотят. Кто-то ответит вам взаимностью,
							кто-то – нет, но если ничего не делать – будет сложнее. Чтобы
							набирать приличное число просмотров, нужно быть активным. Это
							правило справедливо для всех сайтов, где можно размещать
							собственные литературные произведения. На этом сайте нет
							специальных «читателей», задача которых – поскорее ознакомиться с
							вашим творчеством и оценить его. Здесь регистрируются только
							писатели. Поэтому, основными читателями этого сайта являются сами
							писатели. Такие, как вы. :-)
						</p>
						<h2>Зачем нужны баллы?</h2>
						<p>
							Баллы – это показатель вашего рейтинга. По умолчанию список
							пользователей отсортирован по убыванию баллов, поэтому, чем больше
							баллов – тем чаще вас будут замечать. А еще на 200 баллов можно
							продвинуть свою книгу. Сделать это можно на этой странице. После
							этого продвигаемое произведение будет отображаться на всех
							страницах сайта 1 месяц. Это для увеличения количества просмотров.
						</p>
						<h2>Как заработать баллы?</h2>
						<ul>
							<li>
								Баллы начисляются, когда читают ваши книги, у которых менее 80
								просмотров.
							</li>
							<li>
								Баллы начисляются, когда кто-то ставит хорошую оценку вашему
								произведению. Чем больше объем произведения - тем больше
								прибавится баллов.
							</li>
							<li>
								Комментируйте новые книги! За каждый комментарий к недавно
								добавленным книгам вам будет прибавляться по 1 баллу (книги
								должны быть опубликованы не более 8-ми часов назад). Этот способ
								будет работать, пока у вас будет не более 120 баллов.
							</li>
							<li>
								Также баллы начисляются за комментарии с большим количеством
								символов. Внимание! За бессмысленные и одинаковые комментарии, а
								также за намеренное увеличение символов (например, добавление
								множества знаков препинания ")", "." ,"!" и т.п.) – рано или
								поздно вы получите бан и обнуление рейтинга.
							</li>
						</ul>
						<h2>Как удалить аккаунт?</h2>
						<p>
							На вашей странице нажмите на "редактировать анкету". Внизу есть
							кнопка "удалить".
						</p>
					</>
				);
			case 1:
				return (
					<>
						<p>
							Жалобы на книги и пользователей, предложения по улучшению сайта,
							вопросы, сообщения об ошибках в работе сайта пишите в личку админу
							или на почту yapishu.net@yandex.ru
						</p>
					</>
				);
			case 2:
				return (
					<>
						<h2>Правила сайта</h2>
						<ul>
							<li>
								Данные Правила регулируют нормы поведения на сайте YaPishu.net
							</li>
							<li>
								Регистрируясь на сайте, пользователи подтверждают полное
								согласие с Правилами и обязуются их соблюдать.
							</li>
							<li>
								Администрация может в любой момент редактировать данные Правила
								с уведомлением других пользователей об этом или без него.
							</li>
							<li>
								За нарушение Правил пользователю может быть вынесено устное
								предупреждение, а также запрещен доступ к сайту путем блокировки
								или удаления учетной записи.
							</li>
							<li>
								Запрещается обсуждение пользователями любых действий
								администрации.
							</li>
							<li>
								Все произведения и материалы, размещенные на сайте, принадлежат
								их авторам. Перепечатка размещенных материалов возможна
								исключительно с разрешения авторов этих материалов.
							</li>
							<li>
								Любая информация, размещенная пользователями ресурса (в том
								числе публикации, отзывы, комментарии и прочее), выражает
								исключительно точку зрения их автора и может не совпадать с
								мнением администрации
							</li>
							<li>
								Если пользователь не согласен хотя бы с одним из пунктов данных
								Правил, ему не следует создавать учетную запись. Если
								пользователь не согласен с какой-либо редакцией данных Правил,
								он должен незамедлительно отправить администратору личное
								сообщение с просьбой об удалении учетной записи.
							</li>
						</ul>
						<h2>Регистрация</h2>
						<ul>
							<li>
								Как при регистрации, так и при дальнейшем использовании сайта,
								запрещается размещать и указывать такую информацию (в том числе:
								логин, имя, статус, аватар и прочее), которая может нарушать
								общепринятые морально-этические, этнические и религиозные нормы
								или действующее законодательство РФ.
							</li>
							<li>
								Запрещается указывать такую информацию (в том числе: логин, имя,
								статус, аватар и прочее), которая может ввести других
								пользователей в заблуждение и выдать Вас за другого
								зарегистрированного пользователя или за администрацию.
							</li>
							<li>
								Запрещена регистрация нескольких аккаунтов одним и тем же
								посетителем.
							</li>
							<li>
								Запрещается регистрировать новые аккаунты, если ранее Вы
								нарушали Правила и Ваша учетная запись была заблокирована или
								удалена.
							</li>
						</ul>
						<h2>Публикация произведений</h2>
						<ul>
							<li>
								При публикации материалов, автору запрещается размещать любую
								информацию, которая может нарушать общепринятые
								морально-этические, этнические и религиозные нормы или
								действующее законодательство РФ.
							</li>
							<li>
								Публикуя материалы, пользователь подтверждает, что авторские
								права на размещаемые материалы принадлежат исключительно ему.
							</li>
							<li>
								Публикуемые материалы не должны быть низкого
								литературно-художественного уровня и не должны содержать
								большого количества грамматических ошибок - это расценивается
								как неуважение к другим участникам.
							</li>
							<li>
								Размещая материалы, внимательно заполняйте поля только
								предназначенной для этого информацией. Отмечайте только те
								жанры, к которым напрямую относится Ваша публикация.
							</li>
							<li>
								Запрещается дублирование (повторная публикация ранее
								опубликованных на сайте YaPishu.net материалов).
							</li>
							<li>
								Запрещается публикация ранее удаленных с сайта материалов, если
								они были удалены ввиду несоответствия с данными Правилами.
							</li>
							<li>
								Запрещена публикация таких произведений, название или часть
								содержания которых полностью или частично написаны прописными
								(заглавными) буквами.
							</li>
							<li>
								Запрещено использовать любые способы искусственной накрутки
								рейтинга публикаций и призывать к этому других пользователей.
							</li>
							<li>
								Администрация оставляет за собой право удаления любой публикации
								без объяснения причин.
							</li>
						</ul>
						<h2>Комментарии и общение</h2>
						<ul>
							<li>
								При публикации отзыва или комментария, пользователю запрещается
								размещать любую информацию, которая может нарушать общепринятые
								морально-этические, этнические и религиозные нормы, действующее
								законодательство РФ или спровоцировать конфликт между
								пользователями сайта.
							</li>
							<li>
								В рамках отзыва выражайте свое мнение исключительно о
								публикации. Если Вы хотите написать автору что-то не относящееся
								к его публикации, воспользуйтесь системой личных сообщений.
							</li>
							<li>
								В комментариях и тем более отзывах старайтесь не делать
								грамматических ошибок и не использовать жаргонные выражения -
								это неуважение к участникам дискуссии.
							</li>
							<li>
								Каждый участник дискуссии имеет право на личное мнение. Не
								следует обсуждать несовпадение чьего-то мнения с Вашим -
								используйте для этого систему личных сообщений.
							</li>
							<li>
								Не приветствуются переходы на личности и явное выражение
								неуважения к другим участникам дискуссии.
							</li>
							<li>
								Запрещено размещение рекламы (в том числе завуалированной) и
								ссылок на другие ресурсы, не касающихся темы дискуссии или
								публикуемых с целью рекламы стороннего ресурса.
							</li>
							<li>
								Запрещается публикация одинаковых сообщений или отзывов на
								разных страницах сайта.
							</li>
							<li>
								Администрация оставляет за собой право удаления любого отзыва
								или комментария без объяснения причин.
							</li>
						</ul>
					</>
				);
		}
	}, [menu]);

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				{MenuOptions.map((option, index) => {
					return (
						<button
							onClick={() => setMenu(index)}
							className={cn({ [styles.active]: index === menu })}
							key={option}
						>
							{option}
						</button>
					);
				})}
			</div>
			<div className={styles.content}>{reducerContent}</div>
		</div>
	);
};

export default Info;
