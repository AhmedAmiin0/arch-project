import cookies from "next-cookies";
import CreateAdvertisementForm from "../../../components/dashboard/forms/advertisement/CreateAdvertisementForm";
import Layout from "../../../components/dashboard/layout/Layout";
import axios from "../../../config/axios";

export default function showAdvertisement({ globalData,advertisement }) {
  return (
    <Layout data={globalData}>
      <CreateAdvertisementForm canSubmit={false} data={advertisement} />
    </Layout>
  );
}
export const getServerSideProps = async (ctx) => {
  const { token } = cookies(ctx);
  const { locale, params } = ctx;
  const { advertisementId } = params;
  if (!token || token === "" || token === null)
    return {
      redirect: { destination: "/admin/login" },
    };
    const advertisement = await axios
      .get("/advertisements/" + advertisementId, {
        headers: {
          "Accept-Language": locale,
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data.data ?? {});
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
      advertisement
    },
  };
};
