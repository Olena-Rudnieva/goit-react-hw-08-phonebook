import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { Filter } from 'components/Filter/Filter';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Grid, Typography } from '@mui/material';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <Typography variant="h4" component="h3" sx={{ my: 2 }}>
        Contacts
      </Typography>
      <Filter />
      <Grid container rowSpacing={1} columnSpacing={1}>
        {contacts.map(option => {
          return <ContactListItem key={option.id} option={option} />;
        })}
      </Grid>
    </div>
  );
};
