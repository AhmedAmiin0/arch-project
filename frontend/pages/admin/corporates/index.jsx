import { Box } from "@mui/system";
import { useRouter } from "next/router";
import Image from "next/image";
import ListingComponent from "../../../components/dashboard/ListingPage/ListingPage";
import cookies from "next-cookies";

const Corporate = () => {

  const router = useRouter();
  const { locale } = router;
  const columns = [
    {
      field: "corporate_logo",
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
          {params.value.src != ''
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
      field: "url",
      headerName: "url",
      width: 200,
      editable: false,
      sortable: true,
    },
  ];
  return (
    <ListingComponent
      cols={columns}
      locale={locale}
      page_title_plural="corporates"
      page_title_single="corporate"
      api_url="corporates"
      HasSentence={true}
    />
  );
}
Corporate.layout = 'L3'
export default Corporate
export async function getServerSideProps(ctx) {
  const { token } = cookies(ctx);
  if (!token || token === "" || token === null) return {
    redirect: { destination: "/admin/login", }
  };
}