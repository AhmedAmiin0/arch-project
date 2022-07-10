import cookies from "next-cookies";
import CreateUsersForm from "../../../components/dashboard/forms/user/CreateUsersForm";
import Layout from "../../../components/dashboard/layout/Layout";
import axios from "../../../config/axios";

const CreateUser = ({ globalData }) => {
  return (
    <Layout data={globalData}>
      <CreateUsersForm />
    </Layout>
  );
};
export default CreateUser;
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
