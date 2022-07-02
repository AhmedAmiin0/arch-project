import { Box } from "@mui/material";
import cookies from "next-cookies";
import Layout from "../../components/dashboard/layout/Layout";
import axios from "../../config/axios";
const index = ({ token,globalData }) => {
  return <Layout data={globalData}>{token}</Layout>;
};
index.layout = "L3";
export default index;
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
      token,
      globalData,
    },
  };
};
