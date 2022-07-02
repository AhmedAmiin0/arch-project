

import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import axios from "../../../config/axios";
import AboutForm from "../../../components/dashboard/forms/about/AboutForm";

export const getServerSideProps = async (ctx) => {
  const { locale } = ctx;
  const { token } = cookies(ctx);
  if (!token) return { redirect: { destination: "/admin/" } };
  let about = {};
  await axios
    .get("/page/about", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => (about = res.data.data))
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
    props: { about, globalData },
  };
};

const AboutPage = ({ about, globalData }) => {
  return (
    <Layout data={globalData}>
             <AboutForm about={about}  />
    </Layout>
  );
};
export default AboutPage;
