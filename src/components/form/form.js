// import { useState } from "react";
import { FormBtn, FormStyled, InputStyled, LabelStyled } from "./FormStyled";
import { name } from 'redux/nameSlice';
import { number } from "redux/numberSlice";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getName, getNumber } from "redux/selectors";
import {add} from "redux/contactSlice"

export default function ContactForm() {

    const dispatch = useDispatch();
    const nameSelector = useSelector(getName);
    const numberSelector = useSelector(getNumber);
    const items = useSelector(getContacts);

    let data = []
    
    const handleChacge = e => {
        switch (e.currentTarget.name) {
            case 'name':
                dispatch(name(e.currentTarget.value));
                break;
                case 'number':
                    dispatch(number(e.currentTarget.value));
                    break;
                    default: return;
                } 
            }
            
    data = { name: nameSelector, number: numberSelector }
    
            const formSubmitHandler = (data) => {
              const filterdContacts = items.map(contact => contact.name);
              const someName = filterdContacts.some(name => name === data.name);
                if (someName) {
                return alert(`${data.name}, is already in contacts`);
                } 
                    dispatch(add(data));
            }
            
            const formSubmit = (e) => {
                e.preventDefault();
                formSubmitHandler(data)
                reset();
                
    }
  
    const reset = () => {
        dispatch(name(''))
        dispatch(number(''))
}
    
return (
  <FormStyled onSubmit={formSubmit}>
          <LabelStyled>Name
             <InputStyled
              type="text"
              name="name"
              value={nameSelector}
              onChange = {handleChacge}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
          </LabelStyled>

          <LabelStyled>number
            <InputStyled
                type="tel"
                name="number"
                value={numberSelector}
                onChange = {handleChacge}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
/>
          </LabelStyled>
    <FormBtn type='submit'>Add contact</FormBtn>
        </FormStyled>
)
}
