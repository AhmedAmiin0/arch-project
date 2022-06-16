import { Box } from "@mui/material";
import cookies from "next-cookies";
const index = ({ token }) => {
  return <Box>{token}</Box>;
};
index.layout = "L3";
export default index;
export const getServerSideProps = async (ctx) => {
  const { token } = cookies(ctx);
  if (!token || token === "" || token === null) return {
      redirect: { destination: "/admin/login", }
    };

  return {
    props: {
      token,
    },
  };
};
