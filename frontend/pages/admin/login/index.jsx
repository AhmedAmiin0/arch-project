import {Avatar, Box, Button, InputAdornment, Stack, styled, TextField, Typography} from "@mui/material";
import {useRouter} from "next/router";
import VisibilityIcon from '@mui/icons-material/Visibility';
// import {AccountCircle} from "@mui/icons-material";

const login = () => {
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/admin");
    };
    const FormContainer = styled(Stack)(({theme}) => ({
        padding: '32px',
        marginTop: '-100px',
        boxShadow: 'rgb(0 0 0 / 24%) 0px 10px 15px',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '8px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '600px',
        }
    }))
    const LoginContainer = styled(Box)(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }))
    const LoginHeader = styled(Stack)(({theme}) => ({
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    }))
    const LoginInputs = styled(TextField)(({theme}) => ({
        marginTop: '10px',
        width: '100%',
        borderRadius: '8px',
        fieldset: {
            borderColor: 'rgb(45, 55, 72)',
        },
        '.MuiOutlinedInput-root': {
            borderRadius: '8px',
        }
    }))
    return <LoginContainer>
        <FormContainer>
            <LoginHeader mb={2}>
                <Avatar src={'/logo.png'}/>
                <Typography id="modal-modal-title" variant="h4" component="h2" mb={1}>
                    Log in
                </Typography>
                <Typography component={'span'} fontWeight={'100'}>
                    Sign in on the internal platform
                </Typography>
            </LoginHeader>
            <Stack gap={'10px'}>
                <LoginInputs id="outlined-basic" label="Email" variant="outlined"/>
                <LoginInputs id="outlined-basic" label="Password" variant="outlined"
                             type={'password'}
                             InputProps={{
                                 endAdornment: (
                                     <InputAdornment position="end">
                                         <VisibilityIcon
                                             sx={{
                                                 color: 'text.primary',
                                             }}
                                         />
                                     </InputAdornment>
                                 ),
                             }}
                />

                <Button sx={
                    {
                        marginTop: '10px',
                        padding: '12px 16px'
                    }
                } variant="contained" p={5} onClick={handleSubmit} color="primary">Log In</Button>
            </Stack>
        </FormContainer>
    </LoginContainer>
}
login.layout = 'L2'
export default login