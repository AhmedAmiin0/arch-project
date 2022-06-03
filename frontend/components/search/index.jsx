import { Container } from "../layout/GlobalStyle ";
import { SearchItems } from "./SearchItems";
import { Sidebar } from "./Sidebar";
import * as Styles from "./styles";

export function Search() {
	return (
		<Styles.Search>
			<Container>
				<Styles.SearchRow>
					<SearchItems />
					<Sidebar />
				</Styles.SearchRow>
			</Container>
		</Styles.Search>
	);
}
