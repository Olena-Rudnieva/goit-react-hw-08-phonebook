import { Typography } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div>
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        Log in
      </Typography>
      <LoginForm />
    </div>
  );
}
