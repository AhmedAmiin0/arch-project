import {Stack, Typography} from "@mui/material";
import Link from 'next/link'

const LatestFeedbacks = ({data}) => {
  return <Stack direction={'column'} spacing={2} width={'100%'}>
    {data && data.map((item, index) => {
      return <Link href={'/admin/feedbacks/' + item.id}>
        <Stack direction={'row'} sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          display: 'flex',
        }}>
          <Stack>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body1">{item.description.substring(0, 100)}</Typography>
          </Stack>
          <Typography variant="body1" sx={{
            color: '#374256',
          }}>{item.created_at}</Typography>
        </Stack>
      </Link>
    })}
  </Stack>
}
export default LatestFeedbacks;