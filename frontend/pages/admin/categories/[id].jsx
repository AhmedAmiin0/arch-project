import axios from "../../../config/axios";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import EditCategoryForm from "../../../components/dashboard/forms/categories/EditCategoryForm";

const EditCategory = ({ categories, globalData }) => {

  return (
    <Layout data={globalData}>
      <EditCategoryForm categories={categories} />
    </Layout>
  );
};
export default EditCategory;

export const getServerSideProps = async (ctx) => {
  const { locale, params } = ctx;
  const { id } = params;
  const { token } = cookies(ctx);
  let categories = {};
  if (!token) return { redirect: { destination: "/admin/login" } };
  await axios
    .get("/categories/" + id, {
      headers: { "Accept-Language": locale, Authorization: `Bearer ${token}` },
    })
    .then((res) => (categories = res.data))
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
    props: { categories,globalData },
  };
};
