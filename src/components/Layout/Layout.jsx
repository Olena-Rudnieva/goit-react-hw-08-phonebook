import { Container } from '@mui/material';
import { Header } from 'components/Header/Header';

export const Layout = ({ children }) => {
  return (
    <Container fixed={true} sx={{ mt: 9, width: 600 }}>
      <Header />
      {children}
    </Container>
  );
};
