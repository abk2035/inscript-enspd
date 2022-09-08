import React from 'react';
import WizardPage1 from './WizardPage1';
import WizardPage2 from './WizardPage2';
import WizardPage3 from './WizardPage3';
import Wizard from './Wizard';
import'./Wizard.css';
import { register } from '../../services/services';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


const index = ({ click }) => {

  const onSubmit = async values => {
        await sleep(300)
        window.alert(JSON.stringify(values, 0, 2))
        const data = register(values);
         click();
      }

  return (
    <Wizard
        initialValues={{ employed: true, stooge: 'larry' }}
        onSubmit={ onSubmit }
        > 
        <WizardPage1/>
        <WizardPage2/>
        <WizardPage3/>
    </Wizard>
   )
}

export default index ;