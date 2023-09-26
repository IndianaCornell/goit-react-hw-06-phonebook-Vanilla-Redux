import { deleteContact } from 'redux/contactsSlice';
import { ItemsList, StyledItem, DeleteButton } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const localStorageKey = 'quiz-contacts';

export const ContactList = () => {
  const dispatch = useDispatch();

  const { contacts } = useSelector(state => state.contacts);

  const { filter } = useSelector(state => state.filter);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ItemsList>
      {visibleContacts.map(contact => (
        <StyledItem key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </DeleteButton>
        </StyledItem>
      ))}
    </ItemsList>
  );
};
