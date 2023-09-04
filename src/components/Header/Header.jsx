import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" sx={{ my: 2, flexGrow: 1 }}>
          HOME
        </Typography>
        <Button color="inherit">Register</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
