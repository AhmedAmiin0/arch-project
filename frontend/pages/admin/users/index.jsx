import { Box, Typography } from "@mui/material";

import Image from "next/image";
import { useRouter } from "next/router";
import ListingComponent from "../../../components/dashboard/ListingPage/ListingPage";

const Users = () => {
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
      field: "name",
      width: 140,
      headerAlign: "start",
    },
    {
      field: "email",
      width: 140,
      headerAlign: "start",
    }
  ];

  return (
    <ListingComponent
      cols={columns}
      locale={lang}
      page_title_plural="users"
      page_title_single="user"
      api_url="users"
    />
  );
};

Users.layout = "L3";
export default Users;
