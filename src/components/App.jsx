import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Card } from './Card.styled';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { useState } from 'react';

const localStorageKey = 'quiz-contacts';

export const App = () => {
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
