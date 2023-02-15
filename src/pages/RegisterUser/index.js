import React, { useState } from 'react';
import * as C from './style';
import {Link, useNavigate} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import Button from '../../components/Button';
import Input from '../../components/Input';

const RegisterUser = () => {

  const  { signup } = useAuth();

  const [email, setEmail]  = useState();
  const [emailConf, setEmailConf]  = useState();
  const [senha, setSenha] = useState();
  const [error, setError]  = useState();

  const handleRegister = () => {

    if(!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;

    }else if(email !== emailConf){
      setError("Os emails são diferentes!")
      return;
    }
    const res = signup(email, senha);

    if(res){
      setError(res)
      return;
    }
    alert("Admin cadastrado com sucesso!");



  }


  return (

    <C.Container>
    <C.Content>
    <br />
        <C.Label>Login NsBrazil</C.Label>
        <Input Placeholder="Digite o email do administrador" 
        Value={email}
        type="email"
        onChange={(e)=> [setEmail(e.target.value), setError("")]}
        />
        <Input Placeholder="Confirme o email" 
        Value={emailConf}
        type="email"
        onChange={(e)=> [setEmailConf(e.target.value), setError("")]}
        />



        <Input Placeholder="Digite sua senha" 
        Value={senha}
        type="password"
        onChange={(e)=> [setSenha(e.target.value), setError("")]}
        />
        <Button Text="Acessar" onClick={handleRegister}/>
        <C.LabelError>{error}</C.LabelError>


    </C.Content>
</C.Container>
  )
}

export default RegisterUser;
