import { deleteContact } from 'redux/store';
import { ItemsList, StyledItem, DeleteButton } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contactList = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const visibleContact = contactList.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ItemsList>
      {visibleContact.map(contact => (
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
