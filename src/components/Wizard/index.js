import WizardPage1 from './WizardPage1';
import WizardPage2 from './WizardPage2';
import WizardPage3 from './WizardPage3';
import Wizard from './Wizard';
import'./Wizard.css';
import { register } from '../../services/services';

//const sleep = (ms,fn) => new Promise(resolve => setTimeout(fn, ms))
const i =  {
  "nom": "test10",
  "prenom": "test1234",
  "dateNaiss": "2009-12-04",
  "lieuNaiss": "garoua kayley",
  "email": "test5@test.com",
  "telephone": "692562640",
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
  "parentH": "false",
  "codeDip":"bacc",
  "lieuDip":"Office du Baccalaureat",
  "niveau":"L3",
  "codeSerie":"c",
  "codeCursus":"ING"
 } ;

const index = ({ click }) => {
  const onSubmit = async values => {
       let[res,err] = await register(values);
       if(err) console.log(err);
       if(res) click(res.uid);;
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