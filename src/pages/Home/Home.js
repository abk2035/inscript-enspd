import React, { useState } from 'react';
import './Home.css';
import Wizard from '../../components/Wizard';
import { register } from '../../services/services';


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

const Log = ({ click1, click2 }) => {
  const[num,setNum] = useState('');
  const[errorNum, setErrorNum] = useState(false);
  const[error,setError] = useState(false);
  const[form,setForm] = useState('form1');

  const validate1 = async (e) =>{
      e.preventDefault();
      console.log('validate1....: '+num)
      if(!num){
        setError(true);
      }else{
         let[res,err] = await register(num);
         if(err) console.log(err);
         if(res){
          if(res.error) setErrorNum(true);
          else {
            click1(res.uid);
          }
         }
      }
    }

    const validate2 = async (e) =>{
      e.preventDefault();
      console.log('validate2....: '+num)
      if(!num){
        setError(true);
      }else{
         let[res,err] = await register(num);
         if(err) console.log(err);
         if(res){
          if(res.error) setErrorNum(true);
          else {
            console.log(res.etudiant)
            click2(res.etudiant);
          }
         }
      }
    }


  return(
    <div className='log-content'>
        <div>
          {form ==='form1'&&
          (<form action="" onSubmit={ validate1 }>
            <div>
               <label>N<sup>o</sup> d'enregistrement</label>
               <input type='text' name='numInsc' id='num' 
                 onChange={(e) => setNum(e.target.value)} 
                 onFocus={() => { setError(false); setErrorNum(false) }}/>
               <div className={error ? 'text-danger':'d-none'}>
                veuillez entrer un numero
               </div>
               <div className={errorNum ? 'text-danger':'d-none'}>
                 numero inconnu
               </div>
               <p className='' onClick={()=>setForm('form2')}>je veux modifier mes informations</p>
            </div>
            <input type='submit' value="s'inscrire" />
          </form>)}
          {form ==='form2'&&
           (<form action="" onSubmit={ validate2 }>
                <div>
                  <label>N<sup>o</sup> d'enregistrement</label>
                  <input type='text' name='numInsc' id='num' 
                  onChange={(e)=>setNum(e.target.value)} 
                  onFocus={() => { setError(false); setErrorNum(false) }}/>
                  <div className={error ? 'text-danger':'d-none'}>
                    veuillez entrer un numero
                  </div>
                  <div className={errorNum ? 'text-danger':'d-none'}>
                    numero inconnu
                  </div>
                  <p className='cursor-pointer' onClick={()=>setForm('form1')}>je veux m'inscrire</p>
                </div>
                <input type='submit' value="modifier" />
           </form>)}
        </div>
    </div>
  )
}


const Home = () => {
  const [step, setStep] = useState('log');
  const [uid, setUid] = useState(11);
  const [loader,setLoader] = useState(false);
  const [initialValues,setInitialValues]=useState({});

  const downloadFile =(id) => {
    window.open('http://localhost:80/inscript-enspd/api/tcpdf/index.php?uid='+id,'_blank')
 }

  const handleUid = (id) =>{
     setUid(id) ;
     console.log("ha...: "+id)
     setStep('download');
   }

   const handleUpdate= (data) => {
       setInitialValues(data)
       setStep('wizard');
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
      case 'wizard' : return ( <Wizard click={(id) => sleep(() => handleUid(id) )}  values={initialValues}/> )
      case 'download' : return (<DownloadStep click={()=>sleep( () => downloadFile(uid) )} />)
      case 'log':return(<Log 
                         click1={(id) => sleep(() => handleUid(id))}
                         click2={(data) => sleep( () => handleUpdate(data))}/>
                        ) 
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