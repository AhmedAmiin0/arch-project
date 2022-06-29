import { Box } from "@mui/material";
import cookies from "next-cookies";

import Image from "next/image";
import { useRouter } from "next/router";
import ListingComponent from "../../../components/dashboard/ListingPage/ListingPage";
import Layout from "../../../components/dashboard/layout/Layout";
import axios from "../../../config/axios";

const Banners = ({ globalData }) => {
  const router = useRouter();
  const lang = router.locale;
  const columns = [
    {
      field: "banner",
      headerName: "image",
      width: 300,
      renderCell: (params) => (
        <Box
          position={"relative"}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={params.value?.src}
            objectFit={"cover"}
            layout={"fill"}
            alt={params.value?.alt}
          />
        </Box>
      ),
    },
    {
      field: "title",
      width: 300,
      headerAlign: "start",
    },
    {
      field: "subtitle",
      width: 300,
      headerAlign: "start",
    },
  ];

  return (
    <Layout data={globalData}>
      <ListingComponent
        cols={columns}
        locale={lang}
        page_title_plural="banners"
        page_title_single="banner"
        api_url="banners"
        rowHeight={200}
      />
    </Layout>
  );
};
export default Banners;
export async function getServerSideProps(ctx) {
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
    props: { globalData },
  };
}
