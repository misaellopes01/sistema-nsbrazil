import React, {useState, useRef, useEffect} from 'react';
import * as C from "./style";
import Sidebar from '../../components/Sidebar';
import User from '../../assets/conecte-se.png';
import Admin from '../../assets/admin.png';
import Relatorio from "../../assets/relatorio.png";
import * as U from "./style-adduser";
import * as A from "./style-addAdmin";
import useAuth from '../../hooks/useAuth';
import  Button  from '../../components/Button/index';
import Input from "../../components/Input/index";
import logons from './nsbrazil.png';
import pdf from './img-pdf.png';
import "./styles.css";
import ReactToPrint from 'react-to-print';
import { api } from '../../lib/api';



const Home = () => {


  const [stateHome, setStateHome] = useState();

let RegisterUser = () => {


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
    signup(email, senha);

    alert("Aplicador cadastrado com sucesso!");
    setSenha('')
    setEmail('')
    setEmailConf('')

  }
  
  return (
    
    <U.ContainerUser>
    <U.ContentUser>

      
    <br />
        <Input Placeholder="email do aplicador" 
        Value={email}
        type="email"
        onChange={(e)=> [setEmail(e.target.value), setError("")]}
        />
        <Input Placeholder="Confirme o email aplic." 
        Value={emailConf}
        type="email"
        onChange={(e)=> [setEmailConf(e.target.value), setError("")]}
        />

        <Input Placeholder="Digite sua senha" 
        Value={senha}
        type="password"
        onChange={(e)=> [setSenha(e.target.value), setError("")]}
        />
        <Button Text="Cadastrar" onClick={handleRegister}/>
        <U.LabelErrorUser>{error}</U.LabelErrorUser>


    </U.ContentUser>
</U.ContainerUser>
  )
 }


  
 let Report = () => {
  const [report, setReport] = useState([])

  useEffect(() => {
    async function getReports() {
      const token = localStorage.getItem('ns_token')
      api.defaults.headers.common.authorization = `Bearer ${token}`
      const response = await api.get('/forms')
      setReport(response.data)
    }
    getReports()
  }, [])
 /**Criando um array para listar o pdf */
 console.log(report)
 const verification = report.some((item) => {
  return typeof item === "object" && "DadosObra" in item;
});
  
    const ref = useRef();
    if (!verification) {
      return (
        <div>
          <h4>Nada a mostrar</h4>
        </div>
      )
    }
    return (

    <div className='0'>
    
    <div ref={ref} className='container' >
      {report?.map(content => {
        return (
        <div className='print' key={Math.random()}>
          <div  className='content'>
          <img src={logons} className="logo"/>
          
          <h1 className='titleData'>{content.DadosObra[0].label}</h1>
          {content.DadosObra.map(item => {
            return (
              <p className='topics'> <strong>{item.label}: </strong> {item.value}</p>
            )
          })}
           <h1 className='titleData'>{'Checklist'}</h1>
          {content.CheckList.map(item => {
            return (
              <p className='topics'> <strong>{item.label}: </strong> {item.value}</p>
            )
          })}
           <h1 className='titleData'>{'Termo de Inicio de Obra'}</h1>
          {content.TermoInicioObra.map(item => {
            return (
              <p className='topics'> <strong>{item.label}: </strong> {item.value}</p>
            )
          })}
          <h1 className='titleData'>{'Boletim Diario da Obra'}</h1>
          {content.BoletimDiarioObra.map(item => {
            return (
              <p className='topics'> <strong>{item.label}: </strong> {item.value}</p>
            )
          })}
           <h1 className='titleData'>{'Termo de Entrega da Obra'}</h1>
          {content.TermoEntregaObra.map(item => {
            return (
              <p className='topics'> <strong>{item.label}: </strong> {item.value}</p>
            )
          })}
           <h1 className='titleData'>{'Atestado Capacidade Técnica'}</h1>
          {content.AtestadoCapacTec.map(item => {
            return (
              <p className='topics'> <strong>{item.label}: </strong> {item.value}</p>
            )
          })}
          <h1 className='titleData'>{'Satisfação'}</h1>
          {content.Satisfacao.map(item => {
            return (
              <p className='topics'> <strong>{item.label}: </strong> {item.value}</p>
            )
          })}
          <h1 className='titleData'>{'Visita Técnica'}</h1>
          {content.VisitaTecnica.map(item => {
            return (
              <p className='topics'> <strong>{item.label}: </strong> {item.value}</p>
            )
          })}
          </div>
        </div>);
      })}
    </div>

    <div className='containerPdf'>

    <img src={pdf} className="pdfImg"/>

    <ReactToPrint trigger={() => <button className='buttonPdf'>Baixar pdf</button>}  content={()=> ref.current} />

    </div>
   
    </div>

   
  )

 } 


 let RegisterAdmin = () => {


  const { signupAdmin } = useAuth();

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

    signupAdmin(email, senha);

    alert("Admin cadastrado com sucesso!");

    setSenha('')
    setEmail('')
    setEmailConf('')

  }
  
  return (
    
    <A.ContainerUser>

    <A.ContentUser>

    <br />

        <Input Placeholder="email do admin" 
        Value={email}
        type="email"
        onChange={(e)=> [setEmail(e.target.value), setError("")]}
        />

        <Input Placeholder="Confirme o email admin" 
        Value={emailConf}
        type="email"
        onChange={(e)=> [setEmailConf(e.target.value), setError("")]}
        />

        <Input Placeholder="Digite sua senha" 
        Value={senha}
        type="password"
        onChange={(e)=> [setSenha(e.target.value), setError("")]}
        />
        
        <Button Text="Cadastrar" onClick={handleRegister}/>

        <U.LabelErrorUser>{error}</U.LabelErrorUser>


    </A.ContentUser>

</A.ContainerUser>

  );
 } 



 return (

  <C.Container>

  <Sidebar />

  <C.Content>

    <C.Blocks>

    <C.Block

  onClick={()=> setStateHome(<RegisterUser />)}
  >

    <C.Img src={User}/>
    <C.Label>
      Cadastro aplicador
    </C.Label>

  </C.Block>
  <C.Block
  onClick={()=> setStateHome(<RegisterAdmin />)}
  >

<C.Img src={Admin} />
    <C.Label>

      Cadastro admin

    </C.Label>

</C.Block>

<C.Block
onClick={()=> setStateHome(<Report />)}
>

<C.Img src={Relatorio} />

  <C.Label>

      Relatório das obras

  </C.Label>

</C.Block>

    </C.Blocks>
 
  {stateHome}

  </C.Content>
 </C.Container>


)

}

export default Home
