import { Typography, Stack, TextField, Button } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import { useDelete } from "../../../../hooks/useCRUD";
import { ContentPageContainer, ContentPageFlexBox } from "../../layout/ContentPage/ContentPageContainer";
function MessageForm({ message }) {
  const router = useRouter();
  const { messageId } = router.query;
  const { deleteItem } = useDelete(router.locale);
  return (
    <ContentPageContainer>
      <Typography variant={"h4"} mb={3}>
        Show Message
      </Typography>
      <ContentPageFlexBox>
        <Stack flex={2} direction={"column"} spacing={2}>
          <Typography variant={"h6"}>Basic information</Typography>
        </Stack>
        <Stack
          flex={3}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
        >
          <TextField
            label={"Subject"}
            value={message.subject}
            disabled={true}
            variant={"outlined"}
            fullWidth={true}
          />
          <TextField
            label={"Message"}
            value={message.message}
            disabled={true}
            variant={"outlined"}
            fullWidth={true}
          />
          <TextField
            label={"Sender"}
            value={message.email}
            disabled={true}
            variant={"outlined"}
            fullWidth={true}
          />
          <TextField
            label={"Date"}
            value={message.created_at}
            disabled={true}
            variant={"outlined"}
            fullWidth={true}
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
            onClick={async () => await deleteItem("messages", messageId)}
          >
            Delete
          </Button>
        </Stack>
      </ContentPageFlexBox>
    </ContentPageContainer>
  );
}

export default MessageForm;
