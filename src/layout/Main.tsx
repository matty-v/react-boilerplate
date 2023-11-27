import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useGoogleOneTapLogin } from '@react-oauth/google';

export function Main() {

  useGoogleOneTapLogin({
    onSuccess: credentialResponse => {
      console.log(credentialResponse);
    },
    onError: () => {
      console.log('Login Failed');
    }
  });

  return (
    <Box>
      <Typography variant="h1">Hello World!</Typography>
    </Box>
  );
}
