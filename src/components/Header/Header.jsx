import { AppBar, Grid, Toolbar } from '@mui/material';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar>
      <Toolbar>
        <Grid container alignItems="center" flexWrap="nowrap">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
