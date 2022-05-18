import Link from "next/link";
import * as Styles from "./styles";

export function Sidebar() {
	return (
		<Styles.Sidebar>
			<Styles.Box>
				<Styles.BoxTitle>categories</Styles.BoxTitle>
				<Styles.BoxInfo>
					<Styles.CategoriesList>
						<Styles.CategoriesItem>
							<Link href="/" passHref>
								<Styles.CategoriesItemLink>
									global [1]
								</Styles.CategoriesItemLink>
							</Link>
						</Styles.CategoriesItem>
						<Styles.CategoriesItem>
							<Link href="/" passHref>
								<Styles.CategoriesItemLink>meet [2]</Styles.CategoriesItemLink>
							</Link>
						</Styles.CategoriesItem>
						<Styles.CategoriesItem>
							<Link href="/" passHref>
								<Styles.CategoriesItemLink>news [7]</Styles.CategoriesItemLink>
							</Link>
						</Styles.CategoriesItem>
						<Styles.CategoriesItem>
							<Link href="/" passHref>
								<Styles.CategoriesItemLink>
									projects [5]
								</Styles.CategoriesItemLink>
							</Link>
						</Styles.CategoriesItem>
					</Styles.CategoriesList>
				</Styles.BoxInfo>
			</Styles.Box>

			<Styles.Box>
				<Styles.BoxTitle>newsletter</Styles.BoxTitle>
				<Styles.BoxInfo>
					<Styles.Form>
						<Styles.Input
							type="email"
							placeholder="Your email address"
							inputMode="email"
						/>

						<Styles.Checkbox>
							<Styles.Input type="checkbox" id="checkbox" />

							<Styles.Label htmlFor="checkbox">
								I have agree to the the terms and conditions.
							</Styles.Label>
						</Styles.Checkbox>

						<Styles.Input type="submit" value="subscribe" />
					</Styles.Form>
				</Styles.BoxInfo>
			</Styles.Box>
		</Styles.Sidebar>
	);
}
