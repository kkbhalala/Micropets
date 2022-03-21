import React from "react";
import { CheckboxContainer } from './Checkbox.styles';

const Checkbox = ({checkBoxChange, checkboxChecked}) => {
    return(
        <CheckboxContainer>
            <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" onChange={checkBoxChange} value={checkboxChecked} />
            <label htmlFor="styled-checkbox-1">Have a promocode?</label>
        </CheckboxContainer>
    )
}

export default Checkbox;