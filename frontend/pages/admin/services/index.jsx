import { Box, Typography } from "@mui/material";
import cookies from "next-cookies";

import Image from "next/image";
import { useRouter } from "next/router";
import ListingComponent from "../../../components/dashboard/ListingPage/ListingPage";

const Services = () => {
  const router = useRouter();
  const lang = router.locale;
  const columns = [
    {
      field: "service_thumb",
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
          <Image
            src={params.value.src}
            height={"100%"}
            width={"100%"}
            objectFit={"contain"}
            alt={params.value.alt}
          />
        </Box>
      ),
    },
    {
      field: "title",
      width: 140,
      headerAlign: "start",
    },
    {
      field: "subtitle",
      width: 140,
      headerAlign: "start",
    },
    {
      field: "visible",
      headerName: "visible",
      width: 100,
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
          <Typography variant={"body2"}>
            {params.value == "VISIBLE" ? "visible" : "hidden"}
          </Typography>
        </Box>
      ),
    },
   {
     field: "is_featured",
     headerName: "Featured",
     width: 100,
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
         <Typography variant={"body2"}>
           {params.value == "FEATURED" ? "Featured" : "Not Featured"}
         </Typography>
       </Box>
     ),
   },
  ];

  return (
    <ListingComponent
      cols={columns}
      locale={lang}
      page_title_plural="services"
      page_title_single="service"
      api_url="services"
    />
  );
};

Services.layout = "L3";
export default Services;
export const getServerSideProps = async (ctx) => {
  const { token } = cookies(ctx);
  if (!token || token === "" || token === null)
    return {
      redirect: { destination: "/admin/login" },
    };
  return {
    props: {
    },
  };
};
