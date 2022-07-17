import cookies from "next-cookies";
import ProfileForm from "../../components/dashboard/forms/user/ProfileForm";
import Layout from "../../components/dashboard/layout/Layout";
import axios from "../../config/axios";

const UserProfile = ({  globalData,  }) => {

  return (
    <Layout data={globalData}>
      <ProfileForm />
    </Layout>
  );
};
export default UserProfile;
export const getServerSideProps = async (ctx) => {
  const { locale } = ctx;
  const { token } = cookies(ctx);
  if (!token) return { redirect: { destination: "/admin/login" } };
  const globalData = await axios
    .get("/global", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data.data ?? {});
  return {
    props: {  globalData },
  };
};
