import React, { useState } from 'react';
import './Home.css';
import Wizard from '../../components/Wizard';
import { download } from '../../services/services';


const Step1 = ({ click }) => {
  return (
    <div className='step-container'>
       <h2>BIENVENUE SUR LE PORTAIL DES INSCRIPTIONS <em> ADMINISTRATIVES  DE L 'ENSPD </em> </h2>
        <div className='step-content'>
          <div className='step-message'>
            <img src='./image/attention.png' alt='attention'/>
            <div className='step-text'>
               L'inscription administrative ici concerne uniquement <br/>les  nouveaux étudiants entrant des niveaux I , III et MASTER.
              <br/> Veuillez lire et remplire attentivement les champs 
            </div>
         </div>
         <button onClick={ click } style={ {borderRadius:'7px'} } > Commencer </button>
        </div>
    </div>
  )
}

const DownloadStep = ({  click }) => {
 
  
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
  const [step, setStep] = useState('step1');
  const [uid, setUid] = useState(11);
  const [loader,setLoader] = useState(false)

  const downloadFile =(id) => {
    download(id).then((res)=> console.log(res.data));
    setLoader(true);
    setTimeout(()=>{ setLoader(false); }, 25000)
 }

  const handleUid = (id) =>{
     setUid(id) ;
     setStep('download');
   }

 const sleep = ( fn ,ms=3000) => {
      setLoader(true);
      setTimeout(()=>{ 
        setLoader(false);
        fn();
       },ms)
 }

  const handleStep = (stage) => {
    switch (stage) {
      case 'step1' : return (<Step1 click={ () => sleep(() => setStep('wizard')) }/> )
      case 'wizard' : return ( <Wizard click={(id) => sleep(() => handleUid(id) ) }/> )
      case 'download' : return (<DownloadStep click={ () => downloadFile(uid) } />) 
      default :
    }
  }


  return (
    <div className='home-container'>
       <main>
       
        { handleStep(step) }
        
         {loader &&
          (
          <div id="loader">
              <div className="spinner-border text-primary "  role="status">
                <span className="sr-only"></span>
              </div>
              <span>loading...</span>
            </div>
           )}
      
       </main>
    </div>
  )
}

export default Home ;