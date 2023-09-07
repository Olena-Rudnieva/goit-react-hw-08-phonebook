import { Typography } from '@mui/material';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div>
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        Registration
      </Typography>
      <RegisterForm />
    </div>
  );
}
