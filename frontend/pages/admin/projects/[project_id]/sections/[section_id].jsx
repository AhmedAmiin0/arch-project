import axios from "../../../../../config/axios";
import cookies from "next-cookies";
import Layout from "../../../../../components/dashboard/layout/Layout";
import EditProjectSection from "../../../../../components/dashboard/forms/projects/Section/EditProjectSection";

const EditSection = ({section, globalData}) => {
  console.log(section)
  return (
    <Layout data={globalData}>
      <EditProjectSection section={section}/>
    </Layout>
  );
};
export default EditSection;
export const getServerSideProps = async (ctx) => {
  const {params, locale} = ctx;
  const {token} = cookies(ctx);
  const {section_id, project_id} = params;
  if (!token) return {redirect: {destination: "/admin/login"}};
  let section = {};
  await axios
    .get("/projects/" + project_id + "/sections/" + section_id, {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => (section = res.data.data))
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
    props: {section, globalData},
  };
};
