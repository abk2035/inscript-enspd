import React, { useState } from 'react';
import { Field } from 'react-final-form';
import Wizard from './Wizard';
import { required ,Error } from './WizardPage1';


const WizardPage3= () => {
     const [niveau,setNiveau] = useState('L1');
      const requiredLevel = value => { 
        if(!value) return 'veuillez remplire ce champ'
        else {
          if(value === 'L3') setNiveau('L3');
          if(value === 'L1') setNiveau('L1');
          return undefined ;
        };
      }

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
          <Field
                   name='annee'
                   component='input'
                   type='number'
                   placeholder='AAAA'
                   max='2017' 
                   min='2000'
                   validate={ required }
                />
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
                   placeholder='moyenne sur 20'
                   max='20' 
                   min='10'
                   step='0.5'
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
          <label>Cursus :</label>
          <Field name="cursus" component="select" validate={ required }>
                    <option />
                    <option value="ING">Ingenieur</option>
                    <option value="SING">Science de l'Ingenieur</option>
                    <option value="MAPRO">Master Professionnel</option>
                    <option value="M2R">Master Recherche</option>
          </Field>
          <Error name="cursus" />
        </div>
        <div>
          <label>Niveau :</label>
          <Field name="niveau" component="select" validate={ requiredLevel } >
                    <option />
                    <option default value="L1"> Niveau I</option>
                    <option value="L3">Niveau III</option>
          </Field>
          <Error name="niveau" />
        </div>
        <div>
          { niveau === 'L3' && (<label> Filière :</label>) }
          { niveau === 'L1' && (<label> Filière Souhaitée au Niveau 3 :</label>) }
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