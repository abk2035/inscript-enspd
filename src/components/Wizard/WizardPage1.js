import React, { useState } from 'react';
import { Field } from 'react-final-form';
import Wizard from './Wizard';
import { fetchData } from '../../services/services';
import  Error    from '../Form/Error';
import Option from '../Form/Option';
import { required } from '../../Utils' 



  const regions = [  
                    {"AD":"Adamaoua"},
                    {"CE":"Centre"},
                    {"ES":"Est"},
                    {"EN":"Extreme Nord"},
                    {"LT":"Littoral"},
                    {"NO":"Nord"},
                    {"OU":"Ouest"},
                    {"NW":"Nord Ouest"},
                    {"SU":"Sud"},
                    {"SW":"Sud Ouest"},
                ];


const WizardPage1 = () => {
    const [nationalite,setNationalite] = useState('');
    const [departements,setDepartements] = useState([]);

    const requiredReg = (value) => { 
        if(!value){ return 'veuillez remplire ce champ' ;
          }else{ 
                 fetchData('dep',value).then((res)=> setDepartements(res.data.departements));
                return undefined ;
               }    
    }

    const requiredNat = value => { 
        if(!value){ return 'veuillez remplire ce champ'
          }else {
            setNationalite(value);
            return undefined ;
        }
    }
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
                    validate={ required }
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
                    max='2010-01-01'
                    placeholder=' jj/MM/AA'
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
                <Field name="nationalite" component='select' validate={ requiredNat } >
                    <option />
                    <option value='Cameroun'>Cameroun</option>
                    <option value='Autre'>Autre</option>
                </Field>
                <Error name="nationalite" />
           </div>
           <div>
                <label>Région :</label>
                <Field name="region" component="select" validate={ requiredReg }>
                    <option />
                    { nationalite === 'Cameroun' && Option(regions)  }  
                    { nationalite === 'Autre' && Option([{'ET':'Autre'}])  }  
                </Field>
                <Error name="region" />
           </div>
           <div>
                <label>Département :</label>
                <Field name="codeDepart" component="select" validate={ required }>
                    <option />
                    { Option(departements) }
                </Field>
                <Error name="codeDepart" />
           </div>
           <div className='d-flex flex-row ' >
                <label className='me-2'>Handicapé ? :</label>
                <div >
                    <label className='me-2 '>
                        <Field name="handicape" component="input" type="radio" value="true" validate={ required }/>
                        {' '}
                        Oui
                        
                    </label>
                    <label>
                        <Field name="handicape" component="input" type="radio" value="false" validate={ required }/>
                        {' '}
                        Non
                    </label>
                </div>
                <Error name="handicape" />
            </div>
            <div>{ console.log()}</div>
       </div>
    </Wizard.Page>
  )
}

export default WizardPage1