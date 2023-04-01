import { useSelector, useDispatch } from "react-redux";
import { filtredContacts } from "redux/selectors";
import { ConstactListStyled, ListItemStyled } from './contactListStyled';
import { deleteContatcs } from "redux/operations";
    
export default function ContactList() {

  const dispatch = useDispatch();

  const filtredComponents = useSelector(filtredContacts);

  const deleteClick = (id) => {
    // console.log(id)
    return dispatch(deleteContatcs(id))
  };
      
        return (
            <>
                    <ConstactListStyled
                    >
                {filtredComponents.map(item =>
                (
                         <ListItemStyled key={item.name} > <span> {item.name} : {item.number}</span> <button type="button" onClick = {()=>{deleteClick(item.id)}}>Delete</button></ListItemStyled>
                         )
                         )}
                         </ConstactListStyled>
            </>
        )
    }