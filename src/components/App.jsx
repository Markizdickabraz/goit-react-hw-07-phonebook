import ContactForm from "./form/form";
import ContactList from "./contactList/contactList";
import Filter from "./filter/filter";
import GlobalStyle from "./globalStyled";
import { useDispatch, useSelector } from "react-redux";
import { filtredContacts} from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

export default function App() {

  const dispatch = useDispatch();
 
    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filtredComponents = useSelector(filtredContacts);
  
    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
          {filtredComponents.length > 0 && <ContactList />}
      </div>
    );
  }


