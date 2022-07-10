import { Box } from "@mui/system";
import { useRouter } from "next/router";
import ListingComponent from "../../../../../components/dashboard/ListingPage/ListingPage";
import Image from "next/image";
import cookies from "next-cookies";
import axios from "../../../../../config/axios";
import Layout from "../../../../../components/dashboard/layout/Layout";

const Sections = ({ globalData }) => {
  const router = useRouter();
  const { locale } = router;
  const { project_id } = router.query;
  const columns = [
    {
      field: "section_photo",
      headerName: "image",
      width: 200,
      filterable: false,
      sortable: false,
      editable: false,
      alignItems: "left",
      renderCell: (params) => (
        <Box
          position={"relative"}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
          }}
        >
          <Image
            src={params?.value?.src}
            height={"100%"}
            width={"100%"}
            objectFit={"contain"}
            alt={params?.value?.alt}
          />
        </Box>
      ),
    },
    {
      field: "title",
      headerName: "Title",
      width: 200,
      editable: false,
      sortable: true,
    },
    {
      field: "subtitle",
      headerName: "Subtitle",
      width: 200,
      editable: false,
      sortable: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 200,
      editable: false,
      sortable: true,
    },
  ];
  return (
    <Layout data={globalData}>
      <ListingComponent
        cols={columns}
        locale={locale}
        page_title_plural="sections"
        page_title_single="section"
        api_url={`projects/${project_id}/sections`}
        url={`/admin/projects/${project_id}/sections`}
      />
    </Layout>
  );
};
export default Sections;
export async function getServerSideProps(ctx) {
  const { locale, params } = ctx;
  const { token } = cookies(ctx);
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
}
