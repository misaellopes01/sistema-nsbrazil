import React, {useState} from 'react';
import Input from '../../../components/Input';
import * as U from "./style";
import Button from "../../../components/Button";
import useAuth from "../../../hooks/useAuth";

const RegisterUser = () => {


    const { signup } = useAuth();
  
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
      
      <U.ContainerUser>
      <U.ContentUser>
      <br />
          <U.LabelUser>Login NsBrazil</U.LabelUser>
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
          <U.LabelErrorUser>{error}</U.LabelErrorUser>
  
  
      </U.ContentUser>
  </U.ContainerUser>
    )
   }

   export default RegisterUser;