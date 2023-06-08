// import { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Container, MainTitle, Title } from './App.styled';
// import initialContacts from 'components/contacts.json';

export function App() {
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
}

// export function App() {
//   const [contacts, setContacts] = useState(initialContacts);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const LocalStoragecontacts = localStorage.getItem('contacts');
//     const parseContacts = JSON.parse(LocalStoragecontacts);
//     if (parseContacts) {
//       setContacts(parseContacts);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = (name, number) => {
//     if (contacts.some(el => el.name.toLowerCase() === name.toLowerCase())) {
//       return alert(`${name} already in contact`);
//     }

//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     setContacts(contacts => [contact, ...contacts]);
//   };

//   const deleteContact = contactId => {
//     setContacts(contacts.filter(contact => contact.id !== contactId));

//     console.log(contactId);
//   };

//   const handlerChangeFilter = e => {
//     setFilter(e.currentTarget.value);
//     console.log(filter);
//   };

//   const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const visibleContacts = getVisibleContacts();

//   return (
//     <Container>
//       <MainTitle>Phonebook</MainTitle>
//       <ContactForm onSubmit={addContact} />
//       <Title>Contacts</Title>
//       <Filter value={filter} onChange={handlerChangeFilter} />
//       <ContactList contacts={visibleContacts} onDelete={deleteContact} />
//     </Container>
//   );
// }
