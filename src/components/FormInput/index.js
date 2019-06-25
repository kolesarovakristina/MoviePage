import React from 'react';
import {StyledInput} from "./styles";

const FormInput = ({type, placeholder, value, onChange, maxLength}) => ( 
    
    <StyledInput 
    type={type}
    placeholder={placeholder} 
    value={value}
    onChange={onChange}
    autoComplete="on"
    required
    minLength={3}
    maxLength={maxLength}
    />
);

export default FormInput;
