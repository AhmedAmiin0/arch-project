import axios from "../../../config/axios";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import EditFeedbackForm from "../../../components/dashboard/forms/feedbacks/EditFeedbackForm";
const EditFeedBack = ({feedback, globalData}) => {
  return (
    <Layout data={globalData}>
      <EditFeedbackForm feedback={feedback}/>
    </Layout>
  );
};
export default EditFeedBack;

export const getServerSideProps = async (ctx) => {
  const {params, locale} = ctx;
  const {token} = cookies(ctx);
  const {feedback_id} = params;
  if (!token) return {redirect: {destination: "/admin/login"}};
  let feedback = {};
  await axios
    .get("/feedbacks/" + feedback_id, {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => (feedback = res.data.data))
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
    props: {feedback, globalData},
  };
};
