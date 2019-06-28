import React, { FC } from "react";
import { StyledInput } from "./styles";

interface IProps {
  type: string;
  placeholder: string;
  value: string;
  maxLength: number;
  onChange: () => void;
}
const FormInput: FC<IProps> = ({
  type,
  placeholder,
  value,
  onChange,
  maxLength
}) => (
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
