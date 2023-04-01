export const getContacts = state => state.contacts.items;

export const getFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const filtredContacts = state => {
    const contacts = getContacts(state)
    const filter = getFilter(state)
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
}