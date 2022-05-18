import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import ListingComponent from "../../../components/dashboard/ListingPage/ListingPage";
const Testimonials = () => {

  const router = useRouter();
  const { locale } = router;
  const columns = [
    {
      field: "client_photo",
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
         {params.value.src !=  ''
          && <Image
            src={params?.value?.src}
            height={"100%"}
            width={"100%"}
            objectFit={"contain"}
            alt={params?.value?.alt}
          />}
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
      field: "position",
      headerName: "Position",
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
  ];
  return (
    <ListingComponent
      cols={columns}
      locale={locale}
      page_title_plural="feedbacks"
      page_title_single="feedback"
      api_url="feedbacks"
    />
  );
};



Testimonials.layout = 'L3'
export default Testimonials
