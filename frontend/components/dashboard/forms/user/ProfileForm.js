import { Button, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  ContentPageContainer,
  ContentPageFlexBox,
} from "../../layout/ContentPage/ContentPageContainer";
import UserProfileInfo from "./ProfileFormComponenets/UserProfileInfo";
import ChangePassword from "./ProfileFormComponenets/ChangePassword";
import axios from "../../../../config/axios";

const ProfileForm = ({ user }) => {
  return (
    <ContentPageContainer>
      <UserProfileInfo user={user} />
      <ChangePassword />
    </ContentPageContainer>
  );
};
export default ProfileForm;
