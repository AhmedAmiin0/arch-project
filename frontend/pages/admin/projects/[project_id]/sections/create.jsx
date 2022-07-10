import cookies from "next-cookies";
import axios from "../../../../../config/axios";
import Layout from "../../../../../components/dashboard/layout/Layout";
import CreateProjectSectionForm from "../../../../../components/dashboard/forms/projects/Section/CreateProjectSection";

const CreateSection = ({globalData}) => {

  return (
    <Layout data={globalData}>
      <CreateProjectSectionForm />
    </Layout>
  );
};
export default CreateSection;

export async function getServerSideProps(ctx) {
  const {token} = cookies(ctx);
  if (!token || token === "" || token === null)
    return {
      redirect: {destination: "/admin/login"},
    };
  const {locale} = ctx
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
}
