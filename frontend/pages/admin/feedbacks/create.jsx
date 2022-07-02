import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import axios from "../../../config/axios";
import CreateFeedbackForm from "../../../components/dashboard/forms/feedbacks/CreateFeedbackForm";

const CreateTestimonials = ({globalData}) => {
  return (
    <Layout data={globalData}>
      <CreateFeedbackForm/>
    </Layout>
  );
};
export default CreateTestimonials;

export async function getServerSideProps(ctx) {
  const {token} = cookies(ctx);
  const {locale} = ctx;
  if (!token || token === "" || token === null)
    return {
      redirect: {destination: "/admin/login"},
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
}
