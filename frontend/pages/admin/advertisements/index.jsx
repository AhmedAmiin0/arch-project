import { Box, Typography } from "@mui/material";
import cookies from "next-cookies";
import Image from "next/image";
import { useRouter } from "next/router";
import ListingComponent from "../../../components/dashboard/ListingPage/ListingPage";
import Layout from "../../../components/dashboard/layout/Layout";
import axios from "../../../config/axios";

const Users = ({ globalData }) => {
  const router = useRouter();
  const lang = router.locale;
  const columns = [
    {
      field: "title",
      width: 300,
      headerAlign: "start",
    },
    {
      field: "subject",
      width: 300,
      headerAlign: "start",
    },
    {
      field: "created_at",
      width: 300,
      headerAlign: "start",
    },
  ];
  return (
    <Layout data={globalData}>
      <ListingComponent
        cols={columns}
        locale={lang}
        page_title_plural="advertisements"
        page_title_single="advertisement"
        api_url="advertisements"
        readOnlyList={true}
      />
    </Layout>
  );
};

export default Users;
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
