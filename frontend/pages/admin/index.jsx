import { Stack, Typography } from "@mui/material";
import cookies from "next-cookies";
import { ContentPageFlexBox } from "../../components/dashboard/layout/ContentPage/ContentPageContainer";
import Layout from "../../components/dashboard/layout/Layout";
import axios from "../../config/axios";
import OverviewGrid from "../../components/dashboard/OverviewCard";
import LatestFeedbacks from "../../components/dashboard/LatestFeedbacks";

const index = ({ globalData, overview }) => {
  console.log(overview);
  return (
    <Layout data={globalData}>
      <Typography variant="h4" mb={3}>
        Dashboard Overview
      </Typography>
      <ContentPageFlexBox>
        <OverviewGrid
          projects={overview.projects}
          users={overview.users}
          corporates={overview.corporates}
          feedbacks={overview.feedbacks}
        />
      </ContentPageFlexBox>
      {overview.latestContacts && (
        <>
          <Typography variant="h4" mb={3}>
            Latest Contact Messages
          </Typography>
          <ContentPageFlexBox>
            <LatestFeedbacks data={overview.latestContacts} />
          </ContentPageFlexBox>
        </>
      )}
    </Layout>
  );
};
export default index;
export const getServerSideProps = async (ctx) => {
  const { token } = cookies(ctx);
  const { locale } = ctx;
  if (!token || token === "" || token === null)
    return {
      redirect: { destination: "/admin/login" },
    };
  const globalData = await axios
    .get("/global", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data.data ?? {});
  const overview = await axios
    .get("/overview", {
      headers: {
        "Accept-Language": locale,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data ?? {});
  return {
    props: {
      token,
      globalData,
      overview,
    },
  };
};
