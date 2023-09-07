import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { Button, Grid, Typography } from '@mui/material';

const styles = {
  whiteText: {
    color: 'white',
  },
};

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Grid container gap={3} justifyContent="flex-end" alignItems="center">
      <Typography variant="h6" sx={styles.whiteText}>
        Welcome, {user.name}
      </Typography>

      <Button color="inherit" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Grid>
  );
};
