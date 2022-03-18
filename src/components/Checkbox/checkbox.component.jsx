import React from "react";
import { CheckboxContainer } from './checkbox.styles';

const Checkbox = ({checkBoxChange, checkboxChecked}) => {
    return(
        <CheckboxContainer>
            <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" onChange={checkBoxChange} value={checkboxChecked} />
            <label for="styled-checkbox-1">Have a promocode?</label>
        </CheckboxContainer>
    )
}

export default Checkbox;