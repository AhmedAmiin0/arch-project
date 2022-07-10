import axios from "../../../config/axios";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import CreateProjectsForm from "../../../components/dashboard/forms/projects/CreateProjectsForm";

const Create = ({categories_and_services, globalData}) => {
  console.log(categories_and_services)
  return (
    <Layout data={globalData}>
      <CreateProjectsForm categories_and_services={categories_and_services}/>
    </Layout>
  );
};
export default Create;

export async function getServerSideProps(context) {
  const {locale} = context;
  const {token} = cookies(context);
  let categories_and_services = {}
  await axios
    .get("/projects/create", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => (categories_and_services = res.data))
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
    props: {categories_and_services, globalData},
  };
}
