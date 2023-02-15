import React from 'react';
import * as C from './style';


const ButtonSignout = ({Type, Text, onClick}) => {
  return (
    <C.Button type={Type} onClick={onClick}>
    {Text}
  </C.Button>

  )
}

export default ButtonSignout;