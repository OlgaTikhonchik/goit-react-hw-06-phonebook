import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Button, Error, FormContact, Input, Label } from './ContactForm.styled';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

const schema = yup.object().shape({
  name: yup.string().required('Name is a required field!!!'),
  number: yup.string().required('Number is a required field!!!'),
});

const initialValues = {
  name: '',
  number: '',
};
const nameInputId = nanoid();
const numberInputId = nanoid();

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const dispatch = useDispatch();

  const onAddContact = (name, number) => {
    if (contacts.some(el => el.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} already in contact`);
    }
    // const contact = {
    //   id: nanoid(),
    //   name,
    //   number,
    //
    // };

    dispatch(addContact(name, number));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ ...values });
        resetForm();
      }}
      validationSchema={schema}
    >
      <FormContact autoComplete="off">
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
        />
        <Error name="name" component="div" />

        <Label htmlFor={numberInputId}>Number</Label>
        <Input
          id={numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="123-45-67"
        />
        <Error name="number" component="div" />
        <Button type="submit">Add contact</Button>
      </FormContact>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
