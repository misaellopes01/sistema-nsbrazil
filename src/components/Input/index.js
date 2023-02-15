import React from 'react'
import * as C from './style.js';

const Input = ({Placeholder, onChange, Value, Type}) => {
  return (
    <C.Input 
    placeholder={Placeholder}
    onChange={onChange}
    Value={Value}
    type={Type}
    />
  )
}

export default Input;