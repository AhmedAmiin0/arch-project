import axios from "../../../config/axios";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import CreateCategoryForm from "../../../components/dashboard/forms/categories/CreateCategoryForm";

const Create = ({ globalData }) => {

  return (
    <Layout data={globalData}>
      <CreateCategoryForm />
    </Layout>
  );
};
export default Create;
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
    props: { globalData },
  };
}
