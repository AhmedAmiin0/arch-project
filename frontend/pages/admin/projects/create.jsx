import axios from "../../../config/axios";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import CreateProjectsForm from "../../../components/dashboard/forms/projects/CreateProjectsForm";

const Create = ({ categories_and_services, globalData }) => {

  return (
    <Layout data={globalData}>
      <CreateProjectsForm categories_and_services={categories_and_services} />
    </Layout>
  );
};
export default Create;

export async function getServerSideProps(context) {
  const { locale } = context;
  const { token } = cookies(context);
  const categories_and_services =
    (await axios
      .get("/projects/create", {
        headers: { "Accept-Language": locale },
      })
      .then((res) => res.data)) ?? {};
  const globalData = await axios
    .get("/global", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data.data ?? {});
  if (!token || token === "" || token === null)
    return {
      redirect: { destination: "/admin/login" },
    };

  return {
    props: { categories_and_services, globalData },
  };
}
