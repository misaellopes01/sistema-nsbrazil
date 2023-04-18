import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from "../../components/Input";
import * as C from "./style";
import {Link, useNavigate} from "react-router-dom";
import useAuth from '../../hooks/useAuth';

function Login(){

    const {signin} = useAuth();
    const navigate = useNavigate();


    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [error, setError] = useState();

    const handleStart = async () => {
        if(!email | !senha) {
            setError("Preencha todos os campos.");
            return;
        }
        const res = await signin(email, senha);
       
        if(res !== "Success"){
            setError(res);
            return;
        }
        
        navigate("/home");
    }


    return (
        <C.Container>

            <C.Content>
            <br />
                <C.Label>Login NsBrazil</C.Label>
                <Input Placeholder="Digite seu email" 
                Value={email}
                type="email"
                onChange={(e)=> [setEmail(e.target.value), setError("")]}
                />
                <Input Placeholder="Digite sua senha" 
                Value={senha}
                type="password"
                onChange={(e)=> [setSenha(e.target.value), setError("")]}
                />
                <Button Text="Acessar" onClick={handleStart}/>
                <C.LabelError>{error}</C.LabelError>
               
                

            </C.Content>
        </C.Container>

    );
}

export default Login;
