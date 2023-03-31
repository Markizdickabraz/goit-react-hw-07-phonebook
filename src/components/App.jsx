import ContactForm from "./form/form";
import ContactList from "./contactList/contactList";
import Filter from "./filter/filter";
import GlobalStyle from "./globalStyled";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter, selectIsLoading,selectError } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";


export default function App() {
  
 const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const items = useSelector(getContacts);
  const filterItems = useSelector(getFilter);

  const normalizedFilter = filterItems.toLowerCase();
  let filtredComponents = items.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm />
        {isLoading && !error && <b>Request in progress...</b>}
        <h2>Contacts</h2>
        <Filter />
          {filtredComponents.length > 0 && <ContactList />}
      </div>
    );
  }


