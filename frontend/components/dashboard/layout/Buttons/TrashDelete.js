import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export const TrashDelete = () => {
    return <Button sx={{
        borderRadius: '50%',
        padding: '10px',
        minWidth: 'unset'
    }} color='error'>
        <DeleteIcon sx={{
            fontSize: '1em',
        }}/>
    </Button>
}