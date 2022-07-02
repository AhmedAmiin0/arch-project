
import axios from "../../../config/axios";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import EditBannerForm from "../../../components/dashboard/forms/banners/EditBannerForm";


const EditBanner = ({ banners, globalData }) => {

  return (
    <Layout data={globalData}>
        <EditBannerForm banners={banners}/>
    </Layout>
  );
};
export default EditBanner;
export const getServerSideProps = async (ctx) => {
  const { locale, params } = ctx;
  const { bannerId } = params;
  const { token } = cookies(ctx);
  let banners = {};
  if (!token) return { redirect: { destination: "/admin/login" } };
  await axios
    .get(`banners/${bannerId}`, {
      headers: { "Accept-Language": locale, Authorization: `Bearer ${token}` },
    })
    .then((res) => (banners = res.data))
    .catch((err) => {
      if (err.response.status === 401)
        return axios
          .post("/logout", { headers: { Authorization: `Bearer ${token}` } })
          .then(() => {
            return { redirect: { destination: "/admin/login" } };
          });
    });
  const globalData = await axios
    .get("/global", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data.data ?? {});

  return {
    props: { banners, globalData },
  };
};
