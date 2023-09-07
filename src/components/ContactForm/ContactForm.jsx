import { useState } from 'react';
import { Form } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';
import { TextField, Typography, Button } from '@mui/material';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const data = { name, number };
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.find(contact => data.name === contact.name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    dispatch(addContacts({ name, number }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Phonebook
      </Typography>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />

        <TextField
          label="Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />

        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </Form>
    </div>
  );
};
