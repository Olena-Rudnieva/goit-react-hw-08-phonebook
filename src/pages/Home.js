import { Grid, Typography } from '@mui/material';
import myImage from '../images/phonebook.png';

const Home = () => {
  return (
    <Grid container justifyContent="center">
      <Typography variant="h2" align="center" sx={{ mb: 5 }} color="primary">
        Create your personal Phonebook!
      </Typography>
      <img src={myImage} alt="Phonebook" width={300} />
    </Grid>
  );
};

export default Home;
