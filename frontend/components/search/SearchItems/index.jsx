import Link from "next/link";
import * as Styles from "./styles";

const items = [
	{
		id: 1,
		image: "/4.jpg",
		title: "Fantastic Life Hotel & Spa",
		desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco.",
		date: "May 3, 2018",
	},
	{
		id: 2,
		image: "/logo.png",
		title: "Fantastic Life Hotel & Spa",
		desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco.",
		date: "May 3, 2018",
	},
];

export function SearchItems() {
	const itemsList = items.map((item) => (
		<Styles.SearchItem key={item.id}>
			<Styles.ImageContainer>
				<Styles.Image
					src={item.image}
					alt={item.title}
					layout="responsive"
					width="100%"
					height="100%"
				/>
			</Styles.ImageContainer>

			<Styles.Info>
				<Styles.Title>
					<Link href="/" passHref>
						<Styles.TitleLink>{item.title}</Styles.TitleLink>
					</Link>
				</Styles.Title>
				<Styles.Desc>{item.desc}</Styles.Desc>
				<Styles.InfoDetails>
					<Styles.CommentsCount>
					</Styles.CommentsCount>
					<Styles.Date>{item.date}</Styles.Date>
				</Styles.InfoDetails>
			</Styles.Info>
		</Styles.SearchItem>
	));

	return <Styles.SearchItems>{itemsList}</Styles.SearchItems>;
}
