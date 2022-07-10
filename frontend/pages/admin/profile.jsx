import cookies from "next-cookies";
import ShowUsersForm from "../../components/dashboard/forms/user/ShowUsersForm";
import Layout from "../../components/dashboard/layout/Layout";
import axios from "../../config/axios";

const UserProfile = ({ user, globalData,  }) => {

  return (
    <Layout data={globalData}>
      <ShowUsersForm user={user} />
    </Layout>
  );
};
export default UserProfile;
export const getServerSideProps = async (ctx) => {
  const { locale } = ctx;
  const { token } = cookies(ctx);
  if (!token) return { redirect: { destination: "/admin/login" } };
  let user = {};
  await axios
    .get(`/me`, {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      user = res.data;
      console.log(res);
    })
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
    props: { user, globalData },
  };
};
