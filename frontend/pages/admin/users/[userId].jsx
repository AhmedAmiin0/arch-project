import axios from "../../../config/axios";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import ShowUsersForm from "../../../components/dashboard/forms/user/ShowUsersForm";

const ShowUser = ({ user, globalData }) => {

  return (
    <Layout data={globalData}>
      <ShowUsersForm user={user} />
    </Layout>
  );
};
export default ShowUser;
export const getServerSideProps = async (ctx) => {
  const { locale, params } = ctx;
  const { token } = cookies(ctx);
  const { userId } = params;

  if (!token) return { redirect: { destination: "/admin/login" } };
  let user = {};
  await axios
    .get(`/users/${userId}`, {
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
