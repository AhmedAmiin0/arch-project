
import cookies from "next-cookies";
import MessageForm from "../../../components/dashboard/forms/messages/MessageForm";
import Layout from "../../../components/dashboard/layout/Layout";
import axios from "../../../config/axios";

function showMessage({ globalData, message }) {

  return (
    <Layout data={globalData}>
        <MessageForm message={message} />
    </Layout>
  );
}

export default showMessage;
export const getServerSideProps = async (ctx) => {
  const { token } = cookies(ctx);
  const { locale, params } = ctx;
  const { messageId } = params;
  if (!token || token === "" || token === null)
    return {
      redirect: { destination: "/admin/login" },
    };
  const message = await axios
    .get(`/messages/${messageId}`, {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data.data ?? {});
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
      message,
    },
  };
};
