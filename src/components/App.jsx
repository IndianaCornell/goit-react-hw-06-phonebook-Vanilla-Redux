import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Card } from './Card.styled';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const localStorageKey = 'quiz-contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem(localStorageKey));
    if (savedContacts != null) {
      return savedContacts;
    }
    return [];
  });

  const contactList = useSelector(state => state.contacts);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contactList));
  }, [contactList]);

  // const addContact = newContact => {
  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //     )
  //   ) {
  //     return alert(`${newContact.name} is already in contacts`);
  //   }

  //   if (contacts.find(contact => contact.number === newContact.number)) {
  //     return alert(`${newContact.number} is already in contacts`);
  //   }

  //   setContacts(prevState => [...prevState, newContact]);
  // };

  // const visibleContact = contactList.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <Layout>
      <Card>
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Card>
      <GlobalStyle />
    </Layout>
  );
};
