
import axios from "../../../config/axios";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import CreateServicesForm from "../../../components/dashboard/forms/services/CreateServicesForm";

const Create = ({ globalData }) => {

  return (
    <Layout data={globalData}>
      <CreateServicesForm />
    </Layout>
  );
};
Create.layout = "L3";
export default Create;
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
      globalData,
    },
  };
};
