import Head from "next/head";
import { Search } from "../components/search";

// todo: If no items found

export default function search() {
	return (
		<div style={{ marginTop: "120px" }}>
			<Head>
				<title>Search</title>
				<meta name="description" content="Search Page" />
			</Head>

			<Search />
		</div>
	);
}
