import { Button, Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" alignItems="center" gap={3}>
        <TextField
          label="Username"
          type="text"
          name="name"
          sx={{ width: 250 }}
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          sx={{ width: 250 }}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          sx={{ width: 250 }}
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Grid>
    </form>
  );
};
