import React, { useEffect, useState } from 'react';
import { Field } from 'react-final-form';
import Wizard from './Wizard';
import { required } from '../../Utils';
import Error from '../Form/Error';



const WizardPage2= () => {
  const [nomMere,setNomMere] = useState();

  const requiredMere = value => { 
    if(value) setNomMere(true);
    else return undefined ;
  };

useEffect(() => {
  setNomMere(false)
},[])

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
            validate={ requiredMere }
          />
        </div>
        <div>
          <label>Profession de la mère :</label>
          <Field
            name={"profMere"}
            component="input"
            type="text"
            placeholder="Profession de la mère"
            validate={ required }
          />
          { nomMere && <Error name="profMere" /> }
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
                        <Field name="parentH" component="input" type="radio" value="true" validate={ required }/>
                        {' '}
                        Oui
                        
                    </label>
                    <label>
                        <Field name="parentH" component="input" type="radio" value="false" validate={ required }/>
                        {' '}
                        Non
                    </label>
                </div>
                <Error name="parentH" />
            </div>
      </div>
    </Wizard.Page>
  )
}

export default WizardPage2 ;