import { FormBtn, FormStyled, InputStyled, LabelStyled } from "./FormStyled";
import { useSelector, useDispatch } from "react-redux";
import { getContacts} from "redux/selectors";
import { addContacts } from "redux/operations";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";


export default function ContactForm() {

    let data = [];

    const dispatch = useDispatch();
    const items = useSelector(getContacts);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChacge = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default: return;
           } 
    }
            
            const formSubmitHandler = (event) => {
            data = { name:  {name}.name, number: {name}.number, id: nanoid()}
            event.preventDefault();
            const filterdContacts = items.map(contact => contact.name);
              const someName = filterdContacts.some(name => name === data.name);
                if (someName) {
                    reset();
                    return alert(`${data.name}, is already in contacts`);
                } 
                dispatch(addContacts(data));
                 reset()
            }
            
    const reset = () => {
        setName('');
        setNumber('');
}
    
return (
  <FormStyled onSubmit={formSubmitHandler}>
          <LabelStyled>Name
             <InputStyled
              type="text"
              name="name"
              value={name}
                onChange={handleChacge}
                autoComplete = 'off'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
          </LabelStyled>

          <LabelStyled>number
            <InputStyled
                type="tel"
                name="number"
                value={number}
                onChange={handleChacge}
                autoComplete = 'off'
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
/>
          </LabelStyled>
    <FormBtn type='submit'>Add contact</FormBtn>
        </FormStyled>
)
}
