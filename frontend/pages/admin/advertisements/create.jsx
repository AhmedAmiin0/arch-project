import cookies from "next-cookies";
import CreateAdvertisementForm from "../../../components/dashboard/forms/advertisement/CreateAdvertisementForm";
import Layout from "../../../components/dashboard/layout/Layout";
import axios from "../../../config/axios";

export default function createAdvertisement({ globalData }) {
  return <Layout
    data={globalData}
  >
    <CreateAdvertisementForm />
  </Layout>;
}
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