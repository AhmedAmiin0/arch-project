import axios from "../../../config/axios";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import CorporateSentenceForm from "../../../components/dashboard/forms/corporates/CorporateSentenceForm";

const CorporateSentence = ({ sentence, globalData }) => {
  return (
    <Layout data={globalData}>
      <CorporateSentenceForm sentence={sentence} />
    </Layout>
  );
};
export default CorporateSentence;
export const getServerSideProps = async (ctx) => {
  const { locale } = ctx;
  const { token } = cookies(ctx);
  if (!token) return { redirect: { destination: "/admin/login" } };
  let sentence = {};
  await axios
    .get("corporate_section", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => (sentence = res.data))
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
    props: { sentence, globalData },
  };
};
