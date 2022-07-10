import { Button, Stack, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import {
  ContentPageContainer,
  ContentPageFlexBox,
} from "../../layout/ContentPage/ContentPageContainer";
import Errors from "../../Errors";
import { useDelete } from "../../../../hooks/useCRUD";
const ShowUsersForm = ({ user }) => {
  const formRef = useRef(null);
  const router = useRouter();
  const { userId } = router.query;
  const { deleteItem } = useDelete(router.locale);
  console.log(user);
  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    },
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
                src={formik.values.avatar?.src}
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
              onClick={async () => await deleteItem("users", userId)}
            >
              Delete
            </Button>
          </Stack>
        </ContentPageFlexBox>
      </form>
    </ContentPageContainer>
  );
};
export default ShowUsersForm;
