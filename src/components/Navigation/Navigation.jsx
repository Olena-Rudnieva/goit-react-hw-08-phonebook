import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const styles = {
  whiteText: {
    color: 'white',
  },
  noUnderline: {
    textDecoration: 'none',
  },
};

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Grid container flexWrap="nowrap" gap={3} sx={{ ml: 'auto' }}>
        <NavLink to="/" style={styles.noUnderline}>
          <Typography variant="h6" sx={styles.whiteText}>
            HOME
          </Typography>
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/contacts" style={styles.noUnderline}>
            <Typography variant="h6" sx={styles.whiteText}>
              PHONEBOOK
            </Typography>
          </NavLink>
        )}
      </Grid>
    </nav>
  );
};
