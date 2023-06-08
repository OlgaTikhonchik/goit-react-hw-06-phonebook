import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem';
import { ListContasts } from './ContactList.styled';

import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);

  // const visibleContacts = contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(filter)
  // );

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  if (!filteredContacts?.length) {
    alert('No contacts matching your request');
  }

  const store = useSelector(store => store);
  console.log(store);

  const contactsStore = useSelector(store => store.contacts);
  console.log(contactsStore);

  return (
    <ListContasts>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          // onDelete={onDeleteContact()}
        />
      ))}
    </ListContasts>
  );
};

ContactList.propTypes = {
  // onDelete: PropTypes.func.isRequired,
  contacs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
