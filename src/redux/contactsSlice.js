export const contactsReducer = (
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  action
) => {
  switch (action.type) {
    case 'contacts/addContacts':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'contacts/deleteContacts':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const addContact = contact => {
  return {
    type: 'contacts/addContacts',
    payload: contact,
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/deleteContacts',
    payload: id,
  };
};
