import { Box, Typography } from "@mui/material";
import cookies from "next-cookies";

import Image from "next/image";
import { useRouter } from "next/router";
import ListingComponent from "../../../components/dashboard/ListingPage/ListingPage";
import Layout from "../../../components/dashboard/layout/Layout";
import axios from "../../../config/axios";

const Users = ({ globalData }) => {
  const router = useRouter();
  const lang = router.locale;
  const columns = [
    {
      field: "avatar",
      headerName: "image",
      width: 200,
      renderCell: (params) => (
        <Box
          position={"relative"}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {params.value.src != "" && params.value.src != null && (
            <Image
              src={params.value.src}
              height={"100%"}
              width={"100%"}
              objectFit={"contain"}
              alt={params.value.alt}
            />
          )}
        </Box>
      ),
    },
    {
      field: "name",
      width: 140,
      headerAlign: "start",
    },
    {
      field: "email",
      width: 140,
      headerAlign: "start",
    },
  ];
  return (
    <Layout data={globalData}>
      <ListingComponent
        cols={columns}
        locale={lang}
        page_title_plural="users"
        page_title_single="user"
        api_url="users"
        readOnlyList={true}
      />
    </Layout>
  );
};

export default Users;
export const getServerSideProps = async (ctx) => {
  const { token } = cookies(ctx);
  const { locale } = ctx;
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
  return {
    props: {
      globalData,
    },
  };
};
