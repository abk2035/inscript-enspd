import React, { useState } from 'react';
import { Field } from 'react-final-form';
import Wizard from './Wizard';
import { required ,Error } from './WizardPage1';


const WizardPage3= () => {
     const [niveau,setNiveau] = useState('L1');

  return (
    <Wizard.Page>
       <div className='page-container1'>
         <div>
          <label>Diplome d'admission :</label>
          <Field name="diplome" component="select" validate={ required }>
                    <option />
                    <option value="#ff0000">❤️ Redasdsadasdas</option>
                    <option value="#00ff00">💚 Green</option>
                    <option value="#0000ff">💙 Blue</option>
          </Field>
          <Error name="diplome" />
        </div>
        <div>
          <label>Annee d'obtention :</label>
          <Field name="annee" component="select" validate={ required }>
                    <option />
                    <option value="#ff0000">❤️ Redasdsadasdas</option>
                    <option value="#00ff00">💚 Green</option>
                    <option value="#0000ff">💙 Blue</option>
          </Field>
          <Error name="annee" />
        </div>
        <div>
          <label>Lieu d'obtention :</label>
          <Field name="lieu" component="select" validate={ required }>
                    <option />
                    <option value="#ff0000">❤️ Redasdsadasdas</option>
                    <option value="#00ff00">💚 Green</option>
                    <option value="#0000ff">💙 Blue</option>
          </Field>
          <Error name="lieu" />
        </div>
        <div>
          <label>Série :</label>
          <Field name="serie" component="select" validate={ required }>
                    <option />
                    <option value="#ff0000">❤️ Redasdsadasdas</option>
                    <option value="#00ff00">💚 Green</option>
                    <option value="#0000ff">💙 Blue</option>
          </Field>
          <Error name="serie" />
        </div>
        <div>
           <label>Moyenne :</label>
              <Field
                   name='moyenne'
                   component='input'
                   type='number'
                   placeholder=''
                   validate={ required}
                />
            <Error name='moyenne' />
        </div>
        <div>
          <label>Mention :</label>
          <Field name="mention" component="select" validate={ required }>
                    <option />
                    <option value="#ff0000">❤️ Redasdsadasdas</option>
                    <option value="#00ff00">💚 Green</option>
                    <option value="#0000ff">💙 Blue</option>
          </Field>
          <Error name="mention" />
        </div>
        <div>
          <label>Niveau :</label>
          <Field name="niveau" component="select" validate={ required } >
                    <option default value="L1"> Niveau I</option>
                    <option value="L3">Niveau III</option>
          </Field>
          <Error name="niveau" />
        </div>
        <div>
          { niveau === 'L3' && (<label> Filiere :</label>) }
          { niveau === 'L1' && (<label> Filiere Souhaité a Partir du Niveau 3 :</label>) }
          <Field name="filiere" component="select" validate={ required } >
                    <option />
                    <option value="#ff0000">❤️ Redasdsadasdas</option>
                    <option value="#00ff00">💚 Green</option>
                    <option value="#0000ff">💙 Blue</option>
          </Field>
          <Error name="filiere" />
        </div>
      </div>
    </Wizard.Page>
  )
}

export default WizardPage3