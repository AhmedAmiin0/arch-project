import cookies from "next-cookies";
import { useRouter } from "next/router";
import Layout from "../../../components/dashboard/layout/Layout";

import ListingComponent from "../../../components/dashboard/ListingPage/ListingPage";
import axios from "../../../config/axios";
export async function getServerSideProps(ctx) {
  const { token } = cookies(ctx);
  const { locale } = ctx;
  if (!token || token === "" || token === null)
    return {
      redirect: { destination: "/admin/login" },
    };
  const globalData = await axios
    .get("/global", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data.data ?? {});
  return {
    props: {  globalData },
  };
}

const Category = ({ globalData }) => {
  const router = useRouter();
  const { locale } = router;
  const columns = [
    { field: "name", headerName: "Name", width: 300 },
    {
      field: "visible",
      headerName: "Visible",
      type: "singleSelect",
      valueOptions: ["VISIBLE", "HIDDEN"],
      width: 220,
    },
  ];
  return (
    <Layout data={globalData}>
      <ListingComponent
        cols={columns}
        locale={locale}
        page_title_plural="categories"
        page_title_single="category"
        api_url="categories"
      />
    </Layout>
  );
};
export default Category;
