import cookies from "next-cookies";
import { useRouter } from "next/router";
import Layout from "../../../components/dashboard/layout/Layout";
import ListingComponent from "../../../components/dashboard/ListingPage/ListingPage";
import axios from "../../../config/axios";

function received({ globalData }) {
  const router = useRouter();
  const lang = router.locale;
  const columns = [
    {
      field: "subject",
      headerName: "subject",
      width: 300,
    },
    {
      field: "name",
      headerAlign: "start",
      width: 250,
    },
    {
      field: "email",
      headerAlign: "start",
      width: 250,
    },
    {
      field: "created_at",
      headerAlign: "start",
      width: 140,
    },
  ];
  return (
    <Layout data={globalData}>
      <ListingComponent
        cols={columns}
        locale={lang}
        page_title_plural="messages"
        page_title_single="messages"
        api_url="messages"
        readOnlyList={true}
        canAdd={false}
      />
    </Layout>
  );
}

export default received;
export const getServerSideProps = async (ctx) => {
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
    props: {
      globalData,
    },
  };
};
