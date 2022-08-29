import React, { useState } from 'react';
import './Home.css';
import Wizard from '../../components/Wizard';


const Step1 = ({ click }) => {
  return (
    <div className='step-container'>
       <h2>BIENVENUE SUR LE PORTAIL DES INSCRIPTIONS <em> ADMINISTRATIVES  DE L 'ENSPD </em> </h2>
        <div className='step-content'>
          <div className='step-message'>
            <img src='./image/attention.png' alt='attention'/>
            <div className='step-text'>
               L'inscription administrative ici concerne uniquement <br/>les  nouveaux étudiants entrant des niveaux I et III.
              <br/> Veuillez lire et remplire attentivement les champs 
            </div>
         </div>
         <button onClick={ click } style={ {borderRadius:'7px'} } > Commencer </button>
        </div>
    </div>
  )
}

const DownloadStep = ({ click }) => {
  return (
    <div className='step-container'>
       <h2>ENREGISTREMENT TERMINEE</h2>
        <div className='step-content'>
          <div className='step-message'>
            <img src='./image/download.png' width='80px' height='80px' alt='attention'/>
            <div className='step-text'>
               Votre enregistrement est terminée.
              <br/>Veuillez télécharger votre fiche ! 
            </div>
         </div>
         <button  style={ {borderRadius:'7px'} } onClick={ click } > Télécharger </button>
        </div>
    </div>
  )
}


const Home = () => {
   const [step, setStep]= useState('step1');

  const handleStep = (stage) => {
    switch (stage) {
      case 'step1' : return (<Step1/> )
      break ;
      case 'wizard' : return ( <Wizard /> )
      break ;
      case 'download' : return (<DownloadStep />) 
      break;
      default :
    }
  }


  return (
    <div className='home-container'>
       <main>
       
        { handleStep('wizard') }
      
       </main>
    </div>
  )
}

export default Home ;