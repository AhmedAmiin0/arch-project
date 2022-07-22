import {
  ContentPageContainer,
  ContentPageFlexBox,
} from "../../layout/ContentPage/ContentPageContainer";
import { Button, Stack, TextField, Typography } from "@mui/material";
import Errors from "../../Errors";
import { useRouter } from "next/router";
import { useCreate, useDelete } from "../../../../hooks/useCRUD";
import { useFormik } from "formik";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { EmailSchemaCreate } from "../../schemas/EmailSchema";
import { useRef } from "react";
const EditEmailForm = ({ data  }) => {
  const router = useRouter();
  const { createItem } = useCreate("en", "/emails/" + router.query.emailId);
  const { deleteItem } = useDelete("en");
  const formRef = useRef(null);
  const handleDelete = async () => {
    return await deleteItem("emails", router.query.emailId);
  };
  const formik = useFormik({
    initialValues: {
      email: data?.email || "",
    },
    onSubmit: async (values) => {
      const formData = new FormData(formRef.current);
      formData.append("_method", "PUT");
      let res = await createItem(formData);
    },
    validationSchema: EmailSchemaCreate,
  });
  return (
    <ContentPageContainer>
      <form onSubmit={formik.handleSubmit} ref={formRef}>
        <Typography variant={"h4"} mb={3}>
          Create a new Emails
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
              label={"Email"}
              name={"email"}
              value={formik.values.email}
              {...formik.getFieldProps("email")}
              fullWidth
            />
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
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button
              type={"submit"}
              variant="outlined"
              color="primary"
              startIcon={<DoneIcon />}
            >
              Save
            </Button>
          </Stack>
        </ContentPageFlexBox>
      </form>
    </ContentPageContainer>
  );
};
export default EditEmailForm;
