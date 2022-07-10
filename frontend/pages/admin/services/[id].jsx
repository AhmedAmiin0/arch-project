import axios from "../../../config/axios";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import EditServicesForm from "../../../components/dashboard/forms/services/EditServiceForm";

const Edit = ({ service, globalData }) => {
 
  return (
    <Layout data={globalData}>
      <EditServicesForm service={service} />
    </Layout>
  );
};
export default Edit;

export const getServerSideProps = async (ctx) => {
  const { locale, params } = ctx;
  const { token } = cookies(ctx);
  const { id } = params;

  if (!token) return { redirect: { destination: "/admin/login" } };
  let service = {};
  await axios
    .get(`/services/${id}`, {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => (service = res.data))
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
    props: { service, globalData },
  };
};
