import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const onFilterChange = event => dispatch(addFilter(event.target.value));

  return (
    <TextField
      label=" Find contacts by name"
      sx={{ mb: 2 }}
      fullWidth
      type="text"
      onChange={onFilterChange}
    />
  );
};
