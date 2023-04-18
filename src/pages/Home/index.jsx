import React, {useState, useRef} from 'react';
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


 /**Criando um array para listar o pdf */

 const Pdf = [
 {
     /** titulo de cada tela*/
     titleData: 'Dados da Obra',
     /** ********************  */
     data: '30/06/2023',
     tipoRevest: 'tecnico',
     metragemData: '100 x 100',
     razaoSocial: 'Ns', 
     endereco: 'rua das missas',
     cep: '39805-540',
     cnpjCpf: '039.815.340-45/1000',
     inscricaoEstadual: '085469737',
     enderecoDaObra: 'rua acemar neto',
     contato: 'Alcides moreira',
     setor: 'Hidraulico',
     email: 'lucasferrer@gmail.com',
     telefone: '55 994512768',
     aplicador: 'gomercindo',
     representante: 'Jose bonifacio',
     PV: '999',
      /** titulo de cada tela */
      titleCheck: 'Check List',
      /** ********************  */
      cliente: 'Edson Dutra',

      dadosLevantados: 'Vistoria in Loco',
      tipoDeUso: 'Residencial',
      /** subTitulo  */
      subTitlePrincipal: 'Sistema principal / Aplicador / Especificador',
        /** ********************  */
      sistemaPrincipal: 'Obra',
      MetragemCheck: '45 x 45',
       /** subTitulo  */
       subTitleRevest: 'Solicitacao de revestimento',
       /** ********************  */
       cor: 'Cinza',
       Espessura: '3cm',
       AreaTotal: '2mt',
       rodape: 'Nao',
       altura: '1,90mt',
       juntos: 'sim',
       canaleta: 'nao',
       faixasDemarcatorias: 'sim',
       refBordas: 'nao',
       Sinalizacoes: 'Hidrantes',
       acabamento: 'fosco',
        /** subTitulo  */
      subTitleSubstrato: 'Tipo de Substrato',
      /** ********************  */
     idadeDoConcreto: '7 anos',
     mpa: 'rna',
     baixaResistencia: 'nao',
     revestimentoExistente:'contra-piso',
      /** subTitulo  */
      subTitleMecanica: 'Solicitacao mecanica',
        /** ********************  */
        veiculos: 'leves',
        carrinhoDeRodas: 'removivel',
        empilhadeiras: 'Eletrica',
        peso: '2 toneladas',
        /** subTitulo  */
      subTitleQuimica: 'Solicitacao quimica',
      /** ********************  */
      substanciasQuimicas: ['Acetato de glicogenio, ', 'Ar liquido, ', 'Biocombustivel'],
      concentracao: '15%',
      temperatura: '41 graus',
      Intensidade: 'leve',
      ambiente: 'interno',
     /** subtitulo */
     subTitleReparo: 'Reparo de base / Reparo',
     /** ********************  */
     preparo: 'Fresamento',
     material: 'Silicio',
      /** subtitulo */
      subTitleLimpeza: 'Limpeza',
      /** ********************  */
      limpeza: 'Manual',
       /** subtitulo */
     subTitleExpectativa: 'Expectativa de liberacao',
     /** ********************  */
     tempo: '24 horas 48 horas',
     produto: 'Areia e concreto',
     pesoKit: '200kg',
     rendimento: 'Papelao, plastico',
     numeroDeCamadas: '12',
     area: '12 metros quadrados',
     metragem: '12x18',
     recomendacaoObras: 'Usar alvenarite',
     /** titulo de cada tela */
     titleInicioObra: 'Termo de inicio de obra',
     /** ********************  */
     /** subtitulo */
     subTitleInfra: 'Infraestrutura',
     /** ********************  */
     acessoLocalTrabalho: 'Rampa',
     quadroDeForca: '110 volts / monofasico',
     distanciaQuadroAteTrabalho: '12 metros',
     vestiario: 'primeiro andar',
     pontoAlimentacaoAgua: 'nao tem',
     ventilacao: 'Janelas',
     iluminacao: 'Sim',
     /** subtitulo */
     subTitleCondicaoSubstrato: 'condições do substrato',
     /** ********************  */
     condicoes: 'regular',
     comentarios: 'lugar bom, mas pouco arejado',
     /** subtitulo */
     subTitleAreaTrabalho: 'Area de Trabalho',
     /** ********************  */
     isolamentoArea: 'cliente',
     remocaoEntulho: 'cliente',
     Po: 'geracao',
      /** subtitulo */
      subTitleEtapasPrevistas: 'Etapas Previstas',
      /** ********************  */
     previsaoDeDias: '15 dias',
     FinsDeSemana: 'Nao',
     diasCorridosEtapa: '7 dias',
     trabalhoNoturno: 'Sim',
     comentarios: 'Obra limpa previamente pelo cliente',
     /** titulo de cada tela */
     titleBoletimObra: 'Boletim diario da obra',
     /** ********************  */
           /** subtitulo */
           subTitleHorario: 'Horario',
           /** ********************  */
     entrada: '08:00',
     saida: '18:00',
     efetivosObra: '2 mestres de obra e 2 pedreiros',
         /** subtitulo */
         subTitleAplicacao: 'Aplicação',
         /** ********************  */
         propria: 'Ns',
         Terceirizada: 'Ns Group',
         /** subtitulo */
         subTitleClima: 'Clima',
         /** ********************  */
     temperaturaDoAr: '26 graus',
     umidadeDoAr: '30%',
     historicoEtapa: 'aplicacao argamassa',
     produto: 'argamassa',
     consumo: '5kg',
     metragem: '3 x 3',
     /** subtitulo */
     subTitleHorarioObs: 'Observações do empreiteiro',
     /** ********************  */
     obsEmpreiteiro: 'Nada a dizer',
     obsContratada: 'Fazer revisao periodica',
     assinatura: 'Lucas Ferreira',
     data: '12/12/2023',
     empreiteiro: 'Luiz antonio',
       /** titulo de cada tela */
       titleEntregaObra: 'Termo de entrega de obra',
       /** ********************  */
       numeroContrato: '12389',
       meuNome: 'Lucas Ferreira',
       registroGeral: '2391838475',
       meuCpf: '134.298.315-24',
       assinaturaCliente: 'Luiz miguel',
       declaracao: 'Responsavel pela obra acima mencionada, declaro que recebi os servicos de acordo com os termos contratados, sendo que todos os servicos...',
          /** titulo de cada tela */
       titleAtestadoCapacidadeTecnica: 'Atestado de capacidade técnica',
       /** ********************  */
        /** subtitulo */
       dadosTecnicos: 'Dados técnicos',
       /** ********************  */
        cliente: 'Luiz miguel',
        contato: '55 99123-1658',
        enderecoObra: 'Rua joao alves, centro',
        produtoVendido: 'cimento',
        metragem: '2 metros',
        numeroPedido: '249384',
        /** titulo de cada tela */
        titlePesquisadeSatisfacao: 'Pesquisa de satisfação',
        /** ********************  */
        qualidadeDoAtendimento: 'bom',
        pontualidade: 'Otimo',
        aprovacao: 'regular',
        Organizacao: 'Bom',
        prazoEntregaServicos: 'Otimo',
        Indicacoes: 'Bom',
        /** subtitulo */
       subTitleConsideracoes: 'Considerações',
       /** ********************  */
       consideracoesObra: 'Equipe pro-ativa, animada e engajada no projeto',
       IndicacoesContatos: 'Raimundo Nonato / 41 99169-6969',
       notaFinal: '8,5',
          /** titulo de cada tela */
          titleFormularioVisitaTecnica: 'Formulario de visita técnica',
          /** ********************  */
          /** subtitulo */
       subTitlepatologias: 'Patologias',
       /** ********************  */
       patologias: ['Trinca, ', 'manchas, ', 'Odores'],
       /** subtitulo */
       subTitleCondicoesSubstrato: 'condições do substrato',
       /** ********************  */
       substrato: ['Liso', 'Pintura', 'Novo'],
       informacoesExtras: 'Tem terreno ingrime',
       comentariosRecomendacoes: 'Limpeza e nivelamento do terreno',
       acompanhanteVisita: 'O senhor alfredo acompanhou a equipe',
     }
   ];

    const ref = useRef();
  
    return (

    <div className='0'>
    
    <div ref={ref} className='container' >
      {Pdf.map(content => {
      
      

        return (


        <div className='print' key={Math.random()}>

          <div  className='content'>

          <img src={logons} className="logo"/>

          <h1 className='titleData'>{content.titleData}</h1>

          <p className='topics'> <strong>Data: </strong> {content.data}</p>
          
          <p className='topics'><strong>Tipo de revestimento:  </strong>  {content.tipoRevest}</p>
          
          <p className='topics'><strong>Metragem:  </strong>  {content.metragemData}</p>
          
          <p className='topics'><strong>Razão Social:  </strong>  {content.razaoSocial}</p>
          
          <p className='topics'><strong>Endereço:  </strong>  {content.endereco}</p>
          
          <p className='topics'><strong>Cep:  </strong>  {content.cep}</p>
          
          <p className='topics'><strong>Cnpj/Cpf:  </strong>  {content.cnpjCpf}</p>
          
          <p className='topics'><strong>Inscrição Estadual:  </strong>  {content.inscricaoEstadual}</p>
          
          <p className='topics'><strong>endereço:  </strong>  {content.enderecoDaObra}</p>
          
          <p className='topics'><strong>Contato:  </strong>  {content.contato}</p>
          
          <p className='topics'><strong>Setor:  </strong>  {content.setor}</p>
          
          <p className='topics'><strong>E-mail:  </strong>  {content.email}</p>
          
          <p className='topics'><strong>Telefone/celular:  </strong>  {content.telefone}</p>
          
          <p className='topics'><strong>Aplicador:  </strong>  {content.aplicador}</p>
          
          <p className='topics'><strong>representante:  </strong>  {content.representante}</p>
          
          <p className='topics'><strong>PV:  </strong>  {content.PV}</p>

          <h1 className='titleCheck'>{content.titleCheck}</h1>

          <p className='topics'><strong>Clientes:  </strong>  {content.cliente}</p>
          <p className='topics'><strong>Dados levantados:  </strong>  {content.dadosLevantados}</p>
          <p className='topics'><strong>Tipo de uso:  </strong>  {content.tipoDeUso}</p>

          <h2 className='subTitle'>{content.subTitlePrincipal}</h2>

          <p className='topics'><strong>Sistema principal:  </strong>  {content.sistemaPrincipal}</p>
          
          <p className='topics'><strong>Tipo de uso:  </strong>  {content.MetragemCheck}</p>
          
          <p className='topics'><strong>Tipo de uso:  </strong>  {content.tipoDeUso}</p>

          <h2 className='subTitle'>{content.subTitleRevest}</h2>

          <p className='topics'><strong>Cor:  </strong>  {content.cor}</p>
          
          <p className='topics'><strong>Espessura:  </strong>  {content.Espessura}</p>
          
          <p className='topics'><strong>Area total:  </strong>  {content.AreaTotal}</p>
          
          <p className='topics'><strong>Rodape:  </strong>  {content.rodape}</p>
          
          <p className='topics'><strong>Altura:  </strong>  {content.altura}</p>
          
          <p className='topics'><strong>Juntos:  </strong>  {content.juntos}</p>
          
          <p className='topics'><strong>Canaleta:  </strong>  {content.canaleta}</p>
          
          <p className='topics'><strong>Faixas demarcatórias:  </strong>  {content.faixasDemarcatorias}</p>
          
          <p className='topics'><strong>Ref. bordas:  </strong>  {content.refBordas}</p>
          
          <p className='topics'><strong>sinalizações:  </strong>  {content.Sinalizacoes}</p>
          
          <p className='topics'><strong>Acabamento:  </strong>  {content.acabamento}</p>

          <h2 className='subTitle'>{content.subTitleSubstrato}</h2>

          <p className='topics'><strong>Idade do concreto:  </strong>  {content.idadeDoConcreto}</p>
          
          <p className='topics'><strong>Mpa:  </strong>  {content.mpa}</p>
          
          <p className='topics'><strong>Baixa resistência:  </strong>  {content.baixaResistencia}</p>
          
          <p className='topics'><strong>Revestimento existente:  </strong>  {content.revestimentoExistente}</p>
          
          <h2 className='subTitle'>{content.subTitleMecanica}</h2>

          <p className='topics'><strong>veículos:  </strong>  {content.veiculos}</p>
        
          <p className='topics'><strong>Carrinho de rodas:  </strong>  {content.carrinhoDeRodas}</p>
        
          <p className='topics'><strong>Empilhadeiras:  </strong>  {content.revestimentoExistente}</p>
        
          <p className='topics'><strong>Peso:  </strong>  {content.revestimentoExistente}</p>

          <h2 className='subTitle'>{content.subTitleQuimica}</h2>

          <p className='topics'><strong>Substâncias químicas:  </strong>  {content.substanciasQuimicas}</p>
          
          <p className='topics'><strong>Concentração:  </strong>  {content.concentracao}</p>
          
          <p className='topics'><strong>temperatura:  </strong>  {content.temperatura}</p>
          
          <p className='topics'><strong>Intensidade:  </strong>  {content.Intensidade}</p>
          
          <p className='topics'><strong>Ambiente:  </strong>  {content.ambiente}</p>
          
          <h2 className='subTitle'>{content.subTitleReparo}</h2>

          <p className='topics'><strong>Preparo:  </strong>  {content.ambiente}</p>
          <p className='topics'><strong>Material:  </strong>  {content.material}</p>

          <h2 className='subTitle'>{content.subTitleLimpeza}</h2>

          <p className='topics'><strong>Limpeza:  </strong>  {content.limpeza}</p>

          <h2 className='subTitle'>{content.subTitleExpectativa}</h2>

          <p className='topics'><strong>Tempo:  </strong>  {content.tempo}</p>
          
          <p className='topics'><strong>Produto:  </strong>  {content.produto}</p>
          
          <p className='topics'><strong>Peso do Kit:  </strong>  {content.pesoKit}</p>
          
          <p className='topics'><strong>Rendimento:  </strong>  {content.rendimento}</p>
          
          <p className='topics'><strong>Número de camadas:  </strong>  {content.numeroDeCamadas}</p>
          
          <p className='topics'><strong>Areas:  </strong>  {content.area}</p>
          
          <p className='topics'><strong>Metragem:  </strong>  {content.metragem}</p>
          
          <p className='topics'><strong>recomendações da obra:  </strong>  {content.recomendacaoObras}</p>


          <h1 className='titleInicioObra'>{content.titleInicioObra}</h1>

          <h2 className='subTitle'>{content.subTitleInfra}</h2>

          <p className='topics'><strong>Acesso ao local de trabalho:  </strong>  {content.acessoLocalTrabalho}</p>
          
          <p className='topics'><strong>Quadro de força:  </strong>  {content.quadroDeForca}</p>
          
          <p className='topics'><strong>Distância do quadro até o trabalho:  </strong>  {content.distanciaQuadroAteTrabalho}</p>
          
          <p className='topics'><strong>Vestiário:  </strong>  {content.vestiario}</p>
          
          <p className='topics'><strong>Ponto de alimentação de agua:  </strong>  {content.pontoAlimentacaoAgua}</p>
          
          <p className='topics'><strong>Ventilação:  </strong>  {content.ventilacao}</p>
          
          <p className='topics'><strong>Iluminação:  </strong>  {content.iluminacao}</p>

          <h2 className='subTitle'>{content.subTitleCondicaoSubstrato}</h2>

          <p className='topics'><strong>Condições:  </strong>  {content.condicoes}</p>
          
          <p className='topics'><strong>Comentários:  </strong>  {content.comentarios}</p>

          <h2 className='subTitle'>{content.subTitleAreaTrabalho}</h2>

          <p className='topics'><strong>Isolamento da area:  </strong>  {content.isolamentoArea}</p>
          
          <p className='topics'><strong>Remoção de entulho:  </strong>  {content.remocaoEntulho}</p>
        
          <p className='topics'><strong>Pó:  </strong>  {content.Po}</p>
        

          <h2 className='subTitle'>{content.subTitleEtapasPrevistas}</h2>

          <p className='topics'><strong>Previsão de dias:  </strong>  {content.previsaoDeDias}</p>
          
          <p className='topics'><strong>Fins de semana:  </strong>  {content.FinsDeSemana}</p>
          
          <p className='topics'><strong>Previsão de dias:  </strong>  {content.previsaoDeDias}</p>
          
          <p className='topics'><strong>Dias corridos etapas:  </strong>  {content.diasCorridosEtapa}</p>
          
          <p className='topics'><strong>Trabalho noturno:  </strong>  {content.previsaoDeDias}</p>
        
          <p className='topics'><strong>Comentários:  </strong>  {content.previsaoDeDias}</p>

          <h1 className='titleBoletim'>{content.titleBoletimObra}</h1>

          <h2 className='subTitle'>{content.subTitleHorario}</h2>

          <p className='topics'><strong>Entrada:  </strong>  {content.previsaoDeDias}</p>

          <p className='topics'><strong>Saída:  </strong>  {content.saida}</p>
          
          <p className='topics'><strong>Efetivos da obra:  </strong>  {content.efetivosObra}</p>

          <h2 className='subTitle'>{content.subTitleAplicacao}</h2>

          <p className='topics'><strong>Própria:  </strong>  {content.propria}</p>

          <p className='topics'><strong>Terceirizada:  </strong>  {content.Terceirizada}</p>


          <h2 className='subTitle'>{content.subTitleClima}</h2>

          <p className='topics'><strong>Temperatura do ar:  </strong>  {content.temperaturaDoAr}</p>
          
          <p className='topics'><strong>Umidade do ar:  </strong>  {content.umidadeDoAr}</p>        
          
          <p className='topics'><strong>Histórico da etapa:  </strong>  {content.historicoEtapa}</p>
          
          <p className='topics'><strong>Produto:  </strong>  {content.produto}</p>
          
          <p className='topics'><strong>Consumo:  </strong>  {content.consumo}</p>
          
          <p className='topics'><strong>Metragem:  </strong>  {content.metragem}</p>

          <h2 className='subTitle'>{content.subTitleHorarioObs}</h2>

          <p className='topics'><strong>Observações do empreiteiro:  </strong>  {content.obsEmpreiteiro}</p>
          
          <p className='topics'><strong>Observações da contratada:  </strong>  {content.obsContratada}</p>
          
          <p className='topics'><strong>Assinatura:  </strong>  {content.obsContratada}</p>
          
          <p className='topics'><strong>Data:  </strong>  {content.obsContratada}</p>
          
          <p className='topics'><strong>Empreiteiro:  </strong>  {content.obsContratada}</p>

          <h1 className='titleEntregaObra'>{content.titleEntregaObra}</h1>

          <p className='topics'><strong>Número do contrato:  </strong>  {content.numeroContrato}</p>
          
          <p className='topics'><strong>Meu nome:  </strong>  {content.meuNome}</p>
          
          <p className='topics'><strong>Registro geral:  </strong>  {content.registroGeral}</p>
          
          <p className='topics'><strong>Meu cpf:  </strong>  {content.meuCpf}</p>
          
          <p className='topics'><strong>Assinatura do cliente:  </strong>  {content.assinaturaCliente}</p>
          
          <p className='topics'><strong>Declaração:  </strong>  {content.declaracao}</p>

          <h1 className='titleAtestadoCapacidadeTecnica'>{content.titleAtestadoCapacidadeTecnica}</h1>

          <p className='topics'><strong>Declaração:  </strong>  {content.declaracao}</p>

          <h2 className='subTitle'>{content.dadosTecnicos}</h2>

          <p className='topics'><strong>Cliente:  </strong>  {content.cliente}</p>
          
          <p className='topics'><strong>Contato:  </strong>  {content.contato}</p>
          
          <p className='topics'><strong>Endereço da obra:  </strong>  {content.enderecoDaObra}</p>
          
          <p className='topics'><strong>Produto vendido:  </strong>  {content.produtoVendido}</p>
          
          <p className='topics'><strong>Metragem:  </strong>  {content.metragem}</p>
          
          <p className='topics'><strong>Número do pedido:  </strong>  {content.numeroPedido}</p>

          <h1 className='titlePesquisaSatisfacao'>{content.titlePesquisadeSatisfacao}</h1>

          <p className='topics'><strong>Qualidade do atendimento:  </strong>  {content.qualidadeDoAtendimento}</p>
          
          <p className='topics'><strong>pontualidade:  </strong>  {content.pontualidade}</p>
          
          <p className='topics'><strong>Aprovação:  </strong>  {content.aprovacao}</p>
          
          <p className='topics'><strong>Organização:  </strong>  {content.aprovacao}</p>
          
          <p className='topics'><strong>Prazo de entrega de serviços:  </strong>  {content.aprovacao}</p>
          
          <p className='topics'><strong>Indicações:  </strong>  {content.aprovacao}</p>
        
          <p className='topics'><strong>Indicações:  </strong>  {content.aprovacao}</p>  

          <h2 className='subTitle'>{content.subTitleConsideracoes}</h2>

          <p className='topics'><strong>Considerações da obra:  </strong>  {content.consideracoesObra}</p>
          
          <p className='topics'><strong>Indicações de contatos:  </strong>  {content.IndicacoesContatos}</p>    
          
          <p className='topics'><strong>Nota final:  </strong>  {content.notaFinal}</p>    

          <h1 className='titleFomularioVisitaTecnica'>{content.titleFormularioVisitaTecnica}</h1>

          <h2 className='subTitle'>{content.subTitlepatologias}</h2>

          <p className='topics'><strong>Patologias:  </strong>  {content.patologias}</p>    

          <h2 className='subTitle'>{content.subTitleCondicoesSubstrato}</h2>

          <p className='topics'><strong>Substrato:  </strong>  {content.substrato}</p>  
          
          <p className='topics'><strong>Informações extras:  </strong>  {content.informacoesExtras}</p>      
          
          <p className='topics'><strong>Comentários e recomendações:  </strong>  {content.comentariosRecomendacoes}</p>      
          
          <p className='topics'><strong>acompanhante da visita:  </strong>  {content.acompanhanteVisita}</p>  

          </div>

        </div>  



        );

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
