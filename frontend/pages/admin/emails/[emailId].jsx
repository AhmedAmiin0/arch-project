import cookies from "next-cookies";
import EditEmailForm from "../../../components/dashboard/forms/emails/EditEmailForm";
import Layout from "../../../components/dashboard/layout/Layout";
import axios from "../../../config/axios";

export default function createAdvertisement({ globalData, email }) {
  return (
    <Layout data={globalData}>
      <EditEmailForm data={email} />
    </Layout>
  );
}
export const getServerSideProps = async (ctx) => {
  const { token } = cookies(ctx);
  const { locale, params } = ctx;
  const { emailId } = params;
  if (!token || token === "" || token === null)
    return {
      redirect: { destination: "/admin/login" },
    };
  const globalData = await axios
    .get("/global", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data.data ?? {});
  const email = await axios
    .get(`/emails/${emailId}`, {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data ?? {});

  return {
    props: {
      email,
      globalData,
    },
  };
};
