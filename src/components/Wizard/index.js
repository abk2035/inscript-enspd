import React, { useState } from 'react';
import WizardPage1 from './WizardPage1';
import WizardPage2 from './WizardPage2';
import WizardPage3 from './WizardPage3';
import Wizard from './Wizard';
import'./Wizard.css';
import { register } from '../../services/services';

const sleep = (ms,fn) => new Promise(resolve => setTimeout(fn, ms))
const i =  {
  "nom": "test3",
  "prenom": "test1234",
  "dateNaiss": "2009-12-04",
  "lieuNaiss": "garoua kayley",
  "email": "test@test.com",
  "telephone": "692562630",
  "quartier": "yassa",
  "nationalite": "Cameroun",
  "region": "AD",
  "codeDepart": "FARD",
  "handicape": "true",
  "nomPere": "cours",
  "profPere": "testeur",
  "nomMere": "course",
  "profMere": "courseurse",
  "adresseParents": "djerem",
  "parentH": "false" } ;

const index = ({ click }) => {
  //const [create, setCreate] = useState(false);
  const onSubmit = async values => {
        window.alert(JSON.stringify(values, 0, 2))
        console.log(JSON.stringify(values));
        register(values).then((res) => console.log(res.data)) 
        sleep(300,click())
      }

  return (
    <Wizard
        initialValues={i}
        onSubmit={ onSubmit }
        > 
        <WizardPage1/>
        <WizardPage2/>
        <WizardPage3/>
    </Wizard>
   )
}

export default index ;