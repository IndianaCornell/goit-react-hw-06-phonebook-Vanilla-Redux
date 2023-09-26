export const filterReducer = (
  state = {
    filter: '',
  },
  action
) => {
  switch (action.type) {
    case 'filter/changeFilter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export const filteredContacts = value => {
  return {
    type: 'filter/changeFilter',
    payload: value,
  };
};
