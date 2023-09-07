import { Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const styles = {
  whiteText: {
    color: 'white',
  },
  noUnderline: {
    textDecoration: 'none',
  },
};

export const AuthNav = () => {
  return (
    <Grid container gap={3} justifyContent="flex-end" alignItems="center">
      <NavLink to="/register" style={styles.noUnderline}>
        <Typography variant="h6" sx={styles.whiteText}>
          REGISTER
        </Typography>
      </NavLink>
      <NavLink to="/login" style={styles.noUnderline}>
        <Typography variant="h6" sx={styles.whiteText}>
          LOG IN
        </Typography>
      </NavLink>
    </Grid>
  );
};
