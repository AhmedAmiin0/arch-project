import axios from "../../../../config/axios";
import cookies from "next-cookies";
import Layout from "../../../../components/dashboard/layout/Layout";
import EditProjectsForm from "../../../../components/dashboard/forms/projects/EditProjectsForm";

const EditProject = ({categories_and_services, project, globalData}) => {
  return (
    <Layout data={globalData}>
      <EditProjectsForm categories_and_services={categories_and_services} project={project}/>
    </Layout>
  );
};
export default EditProject;
export const getServerSideProps = async (ctx) => {
  const {params, locale} = ctx;
  const {token} = cookies(ctx);
  const {project_id} = params;
  if (!token) return {redirect: {destination: "/admin/login"}};
  let project = {};
  let categories_and_services = {};
  let globalData = {};
  try {
    await axios
      .get("/projects/create", {
        headers: {
          "Accept-Language": locale,
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => (categories_and_services = res.data));
    await axios
      .get("/projects/" + project_id, {
        headers: {
          "Accept-Language": locale,
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => (project = res.data.data));
    await axios
      .get("/global", {
        headers: {
          "Accept-Language": locale,
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => (globalData = res.data.data ?? {}));
  } catch (e) {
    if (e.response.status === 401)
      return axios
        .post("/logout", {headers: {Authorization: `Bearer ${token}`}})
        .then(() => {
          return {redirect: {destination: "/admin/login"}};
        });
  }
  return {
    props: {project, categories_and_services, globalData},
  };
};
