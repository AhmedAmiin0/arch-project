import { Box } from "@mui/material";

import Image from "next/image";
import { useRouter } from "next/router";
import ListingComponent from "../../../components/dashboard/ListingPage/ListingPage";

const Banners = () => {
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
    <ListingComponent
      cols={columns}
      locale={lang}
      page_title_plural="banners"
      page_title_single="banner"
      api_url="banners"
      rowHeight = {200}
    />
  );
};

Banners.layout = "L3";
export default Banners;
