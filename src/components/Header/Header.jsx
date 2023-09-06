import { AppBar } from '@mui/material';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

      {/* <Toolbar>
        <Typography variant="h6" sx={{ my: 2, flexGrow: 1 }}>
          HOME
        </Typography>
        <Button color="inherit">Register</Button>
        <Button color="inherit">Login</Button>
      </Toolbar> */}
    </AppBar>
  );
};
