import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const Input = styled(TextField)`
  input {
    padding: 11px 12px 13px;
    height: 17px;
    line-height: 1.33333333;
    border: 1px solid gray;
    width: 300px;
    border-radius: 4px;
  }
  input:focus {
    border-color: black;
  }
`;
Input.defaultProps = {
  id: 'outlined-helperText',
  label: '',
  variant: 'outlined',
};
export { Input };
