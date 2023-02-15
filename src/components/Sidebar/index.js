import React, { useState } from 'react'; 
import * as C from './style';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import ButtonSignout from '../ButtonSignout';
import Logo from '../../assets/logoNsBrazil.png';
import Modal from 'react-modal';
import "./modal.css";


const Sidebar = () => {
  const [openModal, setOpenModal] = useState();

  const {signout} = useAuth();
  const navigate = useNavigate();

  function modalOpen(){
    setOpenModal(true)
  }
  function closeModal(){
    setOpenModal(false)
  }

  const [stateHome, setStateHome] = useState();

  return (

    <C.Side>
      <C.Img src={Logo} style={{objectFit: 'contain'}}/>

    <Modal
     isOpen={openModal}
    onAfterClose={closeModal}
    overlayClassName="modal-overlay"
    contentLabel='Sair'
    className="modal-content"
    >
       <C.Label>saindo do painel..</C.Label>
      <hr/>
     
      <p>Deseja realmente sair?</p>

      <br />

       <ButtonSignout Text="sair" onClick={() => [signout(), navigate("/")]}> 
          Sair
    </ButtonSignout>

    </Modal>

    <ButtonSignout Text="sair" onClick={modalOpen}> 
          Sair
    </ButtonSignout>

    </C.Side>


  )

 
}

export default Sidebar
