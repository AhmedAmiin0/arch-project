import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import CreateCorporateForm from "../../../components/dashboard/forms/corporates/CreateCorporateForm";
import axios from '../../../config/axios'

const CreateCorporate = ({globalData}) => {

  return (
    <Layout data={globalData}>
      <CreateCorporateForm/>
    </Layout>
  );
};
export default CreateCorporate;
export async function getServerSideProps(ctx) {
  const {token} = cookies(ctx);
  const {locale} = ctx
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
