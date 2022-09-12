import React, { useState } from 'react';
import { Field } from 'react-final-form';
import Wizard from './Wizard';
import { required } from '../../Utils';
import Option from '../Form/Option';
import { fetchData } from '../../services/services';
import Error from '../Form/Error';

const diplomes = [
                  {"bacc":"Baccalauréat"},
                  {"deug":"DEUG"},
                  {"dut":"DUT"},
                  {"gce":"GCE Advanced Level"},
                  {"LICSCI":"Licence Scientifique"},
                  {"LICTECH":"Licence de Technologie"},
                  {"bt":"Brevet de Technicien"},
                  {"LICPRO":"Licence Professionnelle"},
                  {"bts":"Brevet de Technicien Supérieur"},
                  {"gceo":"GCE Ordinary Level"},
                  {"ET":"Autre"}
                ]

const WizardPage3= () => {
     const [niveau,setNiveau] = useState('L1');
     const [filieres,setFilieres] = useState([]);
     const [series,setSeries] = useState([]);

     const requiredLevel = value => { 
          if(!value) return 'veuillez remplire ce champ'
          else {
            if(value === 'L3') setNiveau('L3');
            if(value === 'L1') setNiveau('L1');
            if(value === 'M1') setNiveau('M1');
            return undefined ;
          };
      }

      
     const requiredCursus = value => { 
        if(!value) return 'veuillez remplire ce champ'
        else {
          fetchData('fil',value).then((res)=> setFilieres(res.data.filieres));
          return undefined ;
        };
     }

     const requiredDip = value => { 
        if(!value) return 'veuillez remplire ce champ'
        else {
          fetchData('ser',value).then((res)=> setSeries(res.data.series));
          return undefined ;
        };
     }

  return (
    <Wizard.Page>
       <div className='page-container1'>
         <div>
          <label>Diplome d'admission :</label>
          <Field name="codeDip" component="select" validate={ requiredDip }>
                    <option />
                    { Option(diplomes) }
          </Field>
          <Error name="codeDip" />
        </div>
        <div>
          <label>Annee d'obtention :</label>
          <Field
                   name='anneeDip'
                   component='input'
                   type='number'
                   placeholder='AAAA'
                   max='2022' 
                   min='1996'
                   validate={ required }
                />
          <Error name="anneeDip" />
        </div>
        <div>
          <label>Lieu d'obtention :</label>
          <Field name="lieuDip" component="select" validate={ required }>
                    <option />
                    <option value="Office du Baccalaureat">Office du Baccalaureat</option>
                    <option value="MINESUP">MINESUP</option>
          </Field>
          <Error name="lieuDip" />
        </div>
        <div>
          <label>Série :</label>
          <Field name="codeSerie" component="select" validate={ required }>
                    <option />
                    { Option(series) }
          </Field>
          <Error name="codeSerie" />
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
                    <option value="Passable">Passable</option>
                    <option value="Assez Bien">Assez Bien</option>
                    <option value="Bien">Bien</option>
                    <option value="Très Bien">Très Bien</option>
                    <option value="Excellent">Excellent</option>
          </Field>
          <Error name="mention" />
        </div>
        <div>
          <label>Cursus :</label>
          <Field name="codeCursus" component="select" validate={ requiredCursus }>
                    <option />
                    <option value="ING">Ingenieur</option>
                    <option value="SING">Science de l'Ingenieur</option>
                    <option value="MAPRO">Master Professionnel</option>
                    <option value="M2R">Master Recherche</option>
          </Field>
          <Error name="codeCursus" />
        </div>
        <div>
          <label>Niveau :</label>
          <Field name="niveau" component="select" validate={ requiredLevel } >
                    <option />
                    <option default value="L1"> Niveau I</option>
                    <option value="L3">Niveau III</option>
                    <option value="M1">Master I</option>
          </Field>
          <Error name="niveau" />
        </div>
        <div>
          { ( niveau === 'L3'|| niveau === 'M1') && (<label> Filière :</label>) }
          { niveau === 'L1' && (<label> Filière Souhaitée au Niveau 3 :</label>) }
          <Field name="codeFiliere" component="select" validate={ required } >
                    <option />
                    { Option(filieres) }
          </Field>
          <Error name="codeFiliere" />
        </div>
      </div>
    </Wizard.Page>
  )
}

export default WizardPage3 