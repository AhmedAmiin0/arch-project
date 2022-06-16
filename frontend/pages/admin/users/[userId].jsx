import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  ContentPageContainer,
  ContentPageFlexBox,
} from "../../../components/dashboard/layout/ContentPage/ContentPageContainer";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useCreate, useDelete } from "../../../hooks/useCRUD";
import { UserSchemaCreate } from "../../../components/dashboard/schemas/UserSchema";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "../../../config/axios";
import Errors from "../../../components/dashboard/Errors";
import cookies from "next-cookies";

const ShowUser = ({ user }) => {
  const formRef = useRef(null);
  const router = useRouter();
  const { userId } = router.query;
  const { createItem } = useCreate(router.locale, "users");
  const { deleteItem } = useDelete(router.locale);
  console.log(user);
  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    },
    onSubmit: async (values) => {
      const formData = new FormData(formRef.current);
      formData.append("avatar", values.avatar);
      const res = await createItem(formData, true);
      console.log(res);
      // router.push(`/admin/banners/${res.data.banner_id}`);
    },
    validationSchema: UserSchemaCreate,
  });

  return (
    <ContentPageContainer>
      <form onSubmit={formik.handleSubmit} ref={formRef}>
        <Typography variant={"h4"} mb={3}>
          Show user
        </Typography>

        <ContentPageFlexBox>
          <Stack
            direction={"column"}
            height={"100%"}
            spacing={2}
            flex={2}
            my={2}
          >
            <Typography variant={"h6"}>Basic information</Typography>
            <Errors formik={formik} />
          </Stack>
          <Stack
            flex={3}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
          >
            <TextField
              label="name"
              name="name"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("name")}
              onBlur={formik.handleBlur}
            />
            <TextField
              label="email"
              name="email"
              variant="outlined"
              fullWidth
              type="email"
              {...formik.getFieldProps("email")}
              onBlur={formik.handleBlur}
            />
            {formik.values.avatar && (
              <img
                src={URL.createObjectURL(formik.values.avatar) || ""}
                alt=""
                title=""
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            )}
          </Stack>
        </ContentPageFlexBox>
        <ContentPageFlexBox>
          <Stack flex={2}>
            <Typography variant={"h6"} my={2}>
              Actions
            </Typography>
          </Stack>
          <Stack
            flex={3}
            justifyContent={"center"}
            direction={"row"}
            alignItems={"center"}
            spacing={2}
          >
            <Button
              variant="outlined"
              component={"a"}
              color="error"
              startIcon={<CloseIcon />}
              onClick={async () => deleteItem(userId)}
            >
              Delete
            </Button>
          </Stack>
        </ContentPageFlexBox>
      </form>
    </ContentPageContainer>
  );
};
ShowUser.layout = "L3";
export default ShowUser;
export const getServerSideProps = async (ctx) => {
  const { params, locale } = ctx;
  const { token } = cookies(ctx);
  const { userId } = params;
  const user =
    (await axios
      .get(`/users/${userId}`, {
        headers: { "Accept-Language": locale },
      })
      .then((res) => res.data)) ?? {};
  if (!token || token === "" || token === null)
    return {
      redirect: { destination: "/admin/login" },
    };

  return {
    props: { user },
  };
};
