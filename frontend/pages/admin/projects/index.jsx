import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import ListingComponent from "../../../components/dashboard/ListingPage/ListingPage";
import cookies from "next-cookies";
import Layout from "../../../components/dashboard/layout/Layout";
import axios from "../../../config/axios";

const ProjectList = ({ globalData }) => {
  const router = useRouter();
  const { locale } = router;
  const columns = [
    {
      field: "project_thumb",
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
      field: "name",
      headerName: "Name",
      width: 200,
      editable: false,
      sortable: true,
    },
    {
      field: "visible",
      headerName: "Visible",
      width: 200,
      sortable: true,
      type: "singleSelect",
      valueOptions: ["VISIBLE", "HIDDEN"],
    },
    {
      field: "is_featured",
      headerName: "Featured",
      width: 200,
      sortable: true,
      type: "singleSelect",
      valueOptions: ["FEATURED", "NOT_FEATURED"],
    },
  ];
  return (
    <Layout data={globalData}>
      <ListingComponent
        cols={columns}
        locale={locale}
        page_title_plural="projects"
        page_title_single="project"
        api_url="projects"
        HasSentence={true}
      />
    </Layout>
  );
};
export default ProjectList;
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
    props: {
      globalData,
    },
  };
}
