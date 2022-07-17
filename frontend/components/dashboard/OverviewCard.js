import {Card, CardContent, Grid, Typography} from "@mui/material";
import Link from 'next/link'

export const OverviewCard = ({cardColor, cardTitle, cardValue}) => {
  return <Card
    variant={"elevation"}
    sx={{
      minHeight: 275,
      bgcolor: cardColor,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    }}
  >
    <CardContent
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1">
        {cardValue}
      </Typography>
      <Typography variant="body2">
        {cardTitle}
      </Typography>
    </CardContent>
  </Card>
}
const OverviewGrid = ({
                        projects,
                        feedbacks,
                        users,
                        corporates,
                      }) => {
  return <>
    <Grid container spacing={2}>
      <Link href="/admin/projects">
        <Grid item
              xs={12}
              sm={6}
              md={3}
        >
          <OverviewCard
            cardColor={'primary.main'}
            cardTitle={'Total Projects'}
            cardValue={projects}
          />
        </Grid>
      </Link>
      <Link href={'/admin/feedbacks'}>
        <Grid item
              xs={12}
              sm={6}
              md={3}
        >
          <OverviewCard
            cardColor={'error.main'}
            cardTitle={'Total Feedbacks'}
            cardValue={feedbacks}
          />
        </Grid>
      </Link>
      <Link href={'/admin/users'}>
        <Grid item
              xs={12}
              sm={6}
              md={3}
        >
          <OverviewCard
            cardColor={'success.main'}
            cardTitle={'Total Users'}
            cardValue={users}
          />
        </Grid>
      </Link>
      <Link href={'/admin/corporates'}>
        <Grid item xs={12}
              sm={6}
              md={3}
        >
          <OverviewCard
            cardColor={'warning.main'}
            cardTitle={'Total Corporations'}
            cardValue={corporates}
          />
        </Grid>
      </Link>
    </Grid>
  </>
}
export default OverviewGrid