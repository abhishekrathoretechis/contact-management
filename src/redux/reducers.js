const initialState = {
    contacts: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
      case 'EDIT_CONTACT':
        const updatedContacts = state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
        return {
          ...state,
          contacts: updatedContacts,
        };
      case 'DELETE_CONTACT':
        const filteredContacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
        return {
          ...state,
          contacts: filteredContacts,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  