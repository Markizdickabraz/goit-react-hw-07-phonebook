import React from "react"
import PropTypes from 'prop-types';
import { InputStyled, LabelStyled } from '../form/FormStyled'
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "redux/selectors";
import { filter } from "redux/filterSlice";

export default function Filter() {
  const dispatch = useDispatch();
  
  const filterItems = useSelector(getFilter)
  const chengeFilter = e => {
    dispatch(filter(e.currentTarget.value))
  }

  return (  
                <LabelStyled>
          Find contacts by name
    <InputStyled
            type='text'
            value={filterItems}
            onChange = {chengeFilter}
          />
        </LabelStyled>    
  )
}



Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func

}
