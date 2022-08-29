import React from 'react';
import { Field } from 'react-final-form';
import Wizard from './Wizard';

export const required = value => { 
                                    if(!value) return 'veuillez remplire ce champ'
                                    else return undefined ;
                                    };

 export const Error = ({ name }) => (
      <Field
       name={name}
       subscription={{ touched: true, error: true }}
       render={({ meta: { touched, error } }) =>
       touched && error ? <span className='error'>{ error }</span> : null
      }
    />
  )

const WizardPage1 = () => {
  return (
    <Wizard.Page>
        <div className='page-container1'>
            <div>
                <label>Nom(s) :</label>
                <Field
                    name='nom'
                    component='input'
                    type='text'
                    placeholder='nom'
                    validate={ required}
                />
               <Error name='nom' />
            </div>
            <div>
                <label>Prénom(s) :</label>
                <Field
                    name='prenom'
                    component='input'
                    type='text'
                    placeholder='prenom'
                    validate={ required }
                />
                <Error name='prenom' />
            </div>
            <div>
                <label>Date de Naissance :</label>
                <Field
                    name='dateNaiss'
                    component='input'
                    type='date'
                    placeholder='jj/MM/AA'
                    validate={ required }
                />
                <Error name='dateNaiss' />
            </div>
            <div>
                <label>Lieu de Naissance :</label>
                <Field
                    name='lieuNaiss'
                    component='input'
                    type='text'
                    placeholder='lieu de naissance'
                    validate={ required }
                />
                <Error name='lieuNaiss' />
            </div>
            <div>
                <label>Email :</label>
                <Field
                    name='email'
                    component='input'
                    type='email'
                    placeholder='Email'
                    validate={ value=>{
                       let errors='';
                        if (!value) {
                            errors = 'veuillez remplire ce champ';
                            return errors ;
                          }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
                              errors = 'email invalide';
                              return errors
                          } 
                        return undefined }
                    }
                />
                <Error name='email' />
            </div>
            <div>
                <label>No Téléphone :</label>
                <Field
                    name='telephone'
                    component='input'
                    type='tel'
                    pattern='[0-9]{3}[0-9]{3}[0-9]{3}'
                    placeholder='format : 692124525'
                    validate={ required }
                />
                <Error name='telephone' />
            </div>
            <div>
                <label>Quartier de Résidence à Douala :</label>
                <Field
                    name='quartier'
                    component='input'
                    type='text'
                    placeholder='logbessou pk15'
                    validate={ required }
                />
                <Error name='quartier' />
            </div>
            <div>
                <label>Pays de Nationalité :</label>
                <Field name="nationalite" component='select' validate={ required }>
                    <option />
                    <option value="#ff0000">❤️ Red</option>
                    <option value="#00ff00">💚 Green</option>
                    <option value="#0000ff">💙 Blue</option>
                </Field>
                <Error name="nationalite" />
           </div>
           <div>
                <label>Région :</label>
                <Field name="region" component="select" validate={ required }>
                    <option />
                    <option value="#ff0000">❤️ Red</option>
                    <option value="#00ff00">💚 Green</option>
                    <option value="#0000ff">💙 Blue</option>
                </Field>
                <Error name="region" />
           </div>
           <div>
                <label>Département :</label>
                <Field name="departement" component="select" validate={ required }>
                    <option />
                    <option value="#ff0000">❤️ Redasdsadasdas</option>
                    <option value="#00ff00">💚 Green</option>
                    <option value="#0000ff">💙 Blue</option>
                </Field>
                <Error name="departement" />
           </div>
           <div className='d-flex flex-row ' >
                <label className='me-2'>Handicapé ? :</label>
                <div >
                    <label className='me-2 '>
                        <Field name="handicape" component="input" type="radio" value="oui" validate={ required }/>
                        {' '}
                        Oui
                        
                    </label>
                    <label>
                        <Field name="handicape" component="input" type="radio" value="non" validate={ required }/>
                        {' '}
                        Non
                    </label>
                </div>
                <Error name="handicape" />
            </div>
       </div>
    </Wizard.Page>
  )
}

export default WizardPage1