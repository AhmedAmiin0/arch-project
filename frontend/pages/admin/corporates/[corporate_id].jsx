import axios from "../../../config/axios";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import EditCorporateForm from "../../../components/dashboard/forms/corporates/EditCorporateForm";

const EditCorporate = ({ corporate, globalData }) => {
  return (
    <Layout data={globalData}>
      <EditCorporateForm corporate={corporate}  />
    </Layout>
  );
};
export default EditCorporate;
export const getServerSideProps = async (ctx) => {
  const { params, locale } = ctx;
  const { token } = cookies(ctx);
  const { corporate_id } = params;
  if (!token) return { redirect: { destination: "/admin/login" } };
  let corporate = {};
  await axios
    .get("/corporates/" + corporate_id, {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => (corporate = res.data.data))
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
    props: { corporate, globalData },
  };
};
