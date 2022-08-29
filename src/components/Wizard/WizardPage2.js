import React from 'react';
import { Field } from 'react-final-form';
import Wizard from './Wizard';
import { Error,required } from './WizardPage1';



const WizardPage2= () => {
  return (
    <Wizard.Page>
       <div className='page-container2'>
         <div>
          <label>Nom du Père ou du Tuteur :</label>
          <Field
            name="nomPere"
            component="input"
            type="text"
            placeholder="nom du père ou du tuteur"
            validate={ required }
          />
          <Error name="nomPere" />
        </div>
        <div>
          <label>Profession du Père ou du Tuteur :</label>
          <Field
            name="profPere"
            component="input"
            type="text"
            placeholder="Profession du père ou du tuteur"
            validate={ required }
          />
          <Error name="profPere" />
        </div>
        <div>
          <label>Nom de la Mère : </label>
          <Field
            name="nomMere"
            component="input"
            type="text"
            placeholder="nom de la mère"
            validate={ required }
          />
          <Error name="nomMere" />
        </div>
        <div>
          <label>Profession de la mère :</label>
          <Field
            name="profMere"
            component="input"
            type="text"
            placeholder="Profession de la mère"
            validate={ required }
          />
          <Error name="profMere" />
        </div>
        <div>
          <label>Adresse des Parents ou du Tuteur :</label>
          <Field
            name="adresseParents"
            component="input"
            type="text"
            placeholder="adresse des parents"
            validate={ required }
          />
          <Error name="adresseParents" />
        </div>
        <div className='d-flex flex-row ' >
                <label className='me-2'>Parent(s) Handicapé(s) ? :</label>
                <div >
                    <label className='me-2 '>
                        <Field name="parentHandicape" component="input" type="radio" value="oui" validate={ required }/>
                        {' '}
                        Oui
                        
                    </label>
                    <label>
                        <Field name="parentHandicape" component="input" type="radio" value="non" validate={ required }/>
                        {' '}
                        Non
                    </label>
                </div>
                <Error name="parentHandicape" />
            </div>
      </div>
    </Wizard.Page>
  )
}

export default WizardPage2 ;