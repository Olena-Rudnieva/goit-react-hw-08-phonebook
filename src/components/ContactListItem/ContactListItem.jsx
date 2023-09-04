import PropTypes from 'prop-types';
import { Item } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { Grid, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactListItem = ({ option }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContacts(option.id));

  return (
    <Grid item xs={12}>
      <Item>
        <Typography variant="body1" component="span">
          {option.name}: {option.phone}
        </Typography>

        <IconButton
          type="button"
          onClick={onDeleteContact}
          aria-label="delete"
          color="primary"
        >
          <DeleteIcon />
        </IconButton>
      </Item>
    </Grid>
  );
};

ContactListItem.propTypes = {
  option: PropTypes.object.isRequired,
};
