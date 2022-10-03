import WizardPage1 from './WizardPage1';
import WizardPage2 from './WizardPage2';
import WizardPage3 from './WizardPage3';
import Wizard from './Wizard';
import'./Wizard.css';
import { update } from '../../services/services';

//const sleep = (ms,fn) => new Promise(resolve => setTimeout(fn, ms))


const index = ({ click ,values}) => {
  const onSubmit = async values => {
       let[res,err] = await update(values);
       if(err) console.log(err);
       if(res) click(res.uid);;
      }

  return (
    <Wizard
        initialValues={ values }
        onSubmit={ onSubmit }
        > 
        <WizardPage1/>
        <WizardPage2/>
        <WizardPage3/>
    </Wizard>
   )
}

export default index ;