import Head from "next/head";
import Layout from "../components/layout/Layout";
import { Search } from "../components/search";

// todo: If no items found

export default function search() {
  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="description" content="Search Page" />
      </Head>
      <Layout>
        <div style={{ marginTop: "120px" }}>
          <Search />
        </div>
      </Layout>
    </>
  );
}
