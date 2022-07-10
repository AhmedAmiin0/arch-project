import axios from "../../../config/axios";
import cookies from "next-cookies";
import ProjectSentenceForm from "../../../components/dashboard/forms/projects/ٍSentenceForm";
import Layout from "../../../components/dashboard/layout/Layout";

const ProjectSentence = ({sentence, globalData}) => {

  return (
    <Layout data={globalData}>
      <ProjectSentenceForm sentence={sentence}/>
    </Layout>
  );
};
export default ProjectSentence;

export async function getServerSideProps(ctx) {
  const {token} = cookies(ctx);
  const {locale} = ctx
  let sentence = {}
  await axios.get("project_sentence", {
    headers: {
      "Accept-Language": locale,
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => sentence = res.data)
    .catch((err) => {
      if (err.response.status === 401)
        return axios
          .post("/logout", {headers: {Authorization: `Bearer ${token}`}})
          .then(() => {
            return {redirect: {destination: "/admin/login"}};
          });
    })
  const globalData = await axios
    .get("/global", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data.data ?? {});
  if (!token || token === "" || token === null)
    return {
      redirect: {destination: "/admin/login"},
    };

  return {
    props: {
      sentence,
      globalData,
    },
  };
}
