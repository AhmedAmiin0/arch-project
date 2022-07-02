import axios from "../../../config/axios";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import ContactUsPageForm from "../../../components/dashboard/forms/contact/ContactForm";

const ContactUsPage = ({contact, globalData}) => {
  return (
    <Layout data={globalData}>
      <ContactUsPageForm contact={contact}/>
    </Layout>
  );
};
export default ContactUsPage;

export const getServerSideProps = async (ctx) => {
  let {locale} = ctx;
  const {token} = cookies(ctx);
  if (!token) return {redirect: {destination: "/admin/login"}};
  let contact = {};
  await axios
    .get("/page/contact", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => (contact = res.data.data))
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
    props: {contact, globalData},
  };
};
