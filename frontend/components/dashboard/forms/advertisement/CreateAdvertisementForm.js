import {
  ContentPageContainer,
  ContentPageFlexBox,
} from "../../layout/ContentPage/ContentPageContainer";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Errors from "../../Errors";
import { useRouter } from "next/router";
import { useCreate, useDelete } from "../../../../hooks/useCRUD";
import { useFormik } from "formik";
import Link from "next/link";
import { AdvertisementSchemaCreate } from "../../schemas/AdvertisementSchema";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
const CreateAdvertisementForm = ({ data = null, canSubmit = true }) => {
  const router = useRouter();
  const { createItem } = useCreate("en", "/advertisements");
  const { deleteItem } = useDelete("en");
  console.log(data)
  const handleDelete = async () => {
    if (!canSubmit) {
      return await deleteItem("advertisements", router.query.advertisementId);
    }
    router.push(`/admin/advertisements`);
  };
  const formik = useFormik({
    initialValues: {
      subject: data?.subject || "",
      message: data?.message || "",
      title: data?.title || "",
    },
    onSubmit: async (values) => {
      if (canSubmit) {
        let res = await createItem(values);
        router.push("/admin/advertisements");
      }
    },
    validationSchema: AdvertisementSchemaCreate,
  });
  return (
    <ContentPageContainer>
      <form onSubmit={formik.handleSubmit}>
        <Typography variant={"h4"} mb={3}>
          Create a new Advertisement
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
              label={"Title"}
              name={"title"}
              value={formik.values.title}
              {...formik.getFieldProps("title")}
              fullWidth
              disabled={!canSubmit}

            />
            <TextField
              label={"Subject"}
              name={"subject"}
              value={formik.values.subject}
              {...formik.getFieldProps("subject")}
              fullWidth
              disabled={!canSubmit}

            />
            <TextField
              label={"Message"}
              name={"message"}
              value={formik.values.message}
              {...formik.getFieldProps("message")}
              fullWidth
              multiline
              disabled={!canSubmit}

              rows={4}
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
                {canSubmit ? 'Cancel' : 'Delete'}
              </Button>
            {canSubmit && (
              <Button
                type={"submit"}
                variant="outlined"
                color="primary"
                startIcon={<DoneIcon />}
              >
                Save
              </Button>
            )}
            </Stack>
          </ContentPageFlexBox>
      </form>
    </ContentPageContainer>
  );
};
export default CreateAdvertisementForm;
