import axios from "../../../config/axios";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import EditGlobalDataForm from "../../../components/dashboard/forms/global/EditGlobalDataForm";

const GlobalData = ({data}) => {
  return (
    <Layout data={data}>
      <EditGlobalDataForm />
    </Layout>
  );
};
export default GlobalData;

export async function getServerSideProps(ctx) {
  const {locale} = ctx;
  const {token} = cookies(ctx);
  if (!token || token === "" || token === null)
    return {
      redirect: {destination: "/admin/login"},
    };
  const data = await axios
    .get("/global", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data.data ?? {});
  return {
    props: {data},
  };
}
