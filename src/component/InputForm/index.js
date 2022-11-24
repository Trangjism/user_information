import React, { useCallback } from 'react';
import _, {debounce} from 'lodash';
import CardStyled from '../CardStyled';
import './InputForm.css';

export default function InputForm(props) {   
    const debounceValue=
    useCallback(debounce((nextValue) =>
     (props.setLoading(true) ,props.setNameUserInput(nextValue)), 1000), []); 
    const handleInputChange = (e) => {
    //    props.setNameUserInput(e.target.value)
       debounceValue(e.target.value)
    }
  return (
    <div>
        <CardStyled>
            <label htmlFor='name'>Name:</label>
            <input
                onChange={handleInputChange}
                placeholder='Please Input Name...'
                type='text'
                id='name'
                />
        </CardStyled>
    </div>
  )
}
