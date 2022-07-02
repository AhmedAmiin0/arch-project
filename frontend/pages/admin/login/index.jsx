import cookies from "next-cookies";
import Layout from "../../../components/dashboard/login/Layout/Layout.js";
import LoginForm from "../../../components/dashboard/forms/login/LoginForm";
import axios from "axios";

const login = ({globalData}) => {

  return <Layout>
    <LoginForm globalData={globalData}/>
  </Layout>;
}
export default login;
export const getServerSideProps = async (ctx) => {
  const {locale} = ctx;
  const {token} = cookies(ctx);
  const globalData = await axios
    .get("http://localhost:8000/global", {
      headers: {"Accept-Language": locale, Authorization: `Bearer ${token}`,},
    })
    .then((res) => res.data.data) ?? {
    logo: {
      src: "/logo.png",
      alt: "logo",
    }
  }
  if (token) return {redirect: {destination: "/admin/"}};
  return {
    props: {
      globalData,
    },
  };
};



























