import axios from "../../../config/axios";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import EditHomeForm from "../../../components/dashboard/forms/home/EditHomeForm";

const HomePage = ({home, globalData}) => {

  return (
    <Layout data={globalData}>
      <EditHomeForm home={home}/>
    </Layout>
  );
};
export default HomePage;
export const getServerSideProps = async (ctx) => {
  const {locale} = ctx;
  const {token} = cookies(ctx);
  if (!token) return {redirect: {destination: "/admin/login"}};
  let home = {};
  await axios
    .get("/page/home", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => (home = res.data.data))
    .catch((err) => {
      if (err.response.status === 401)
        return axios
          .post("/logout", {headers: {Authorization: `Bearer ${token}`}})
          .then(() => {
            return {redirect: {destination: "/admin/login"}};
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
    props: {home, globalData},
  };
};
