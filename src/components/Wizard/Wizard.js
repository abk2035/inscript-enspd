import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import './Wizard.css';
import Stepper from 'react-stepper-horizontal';

class Wizard extends React.Component {
    
     static propTypes = {
      onSubmit: PropTypes.func.isRequired
      }

     static Page = ({ children }) => children

     constructor( props ) {
        super( props )
        this.state = {
                page: 2,
                values: props.initialValues || {}
        }
      }
      previous = () =>
        this.setState(state => ({
           page: Math.max(state.page - 1, 0)
        }));

      next = values =>
            this.setState(state => ({
            page: Math.min(state.page + 1, this.props.children.length - 1),
            values
            })) ;
                    /**
         * NOTE: Both validate and handleSubmit switching are implemented
         * here because 🏁 Redux Final Form does not accept changes to those
         * functions once the form has been defined.
         */
        
      validate = values => {
        console.log('validate');
             const activePage = React.Children.toArray(this.props.children)[
                this.state.page
              ]
            return activePage.props.validate ? activePage.props.validate(values) : {}
          }


      handleSubmit = values => {
            const { children, onSubmit } = this.props
            const { page } = this.state
            const isLastPage = page === React.Children.count(children) - 1
            if (isLastPage) {
              return onSubmit(values)
            } else {
              this.next(values)
            }
        }

         render(){
          const { children } = this.props ;
          const { page, values } = this.state;
          const activePage = React.Children.toArray(children)[page] ;
          const isLastPage = page === React.Children.count(children) - 1 ;
          const steps = [ 'Informations Personnelles','Informations Parentales', 'Informations  Académiques']

          return(
            <Form
               initialValues={values}
               validate={this.validate}
               onSubmit={this.handleSubmit}
             
           
               render =  { ({ handleSubmit, submitting, values }) => (

                   <div className ='wizard-container'>
                     <div className='stepper'>
                       <Stepper steps={ [{title: 'informations personnelles'},{title: 'informations parentales'},{title: 'informations  académiques'}] }
                        activeStep = { page }
                        activeColor='#C2B45F'
                        defaultColor={'#1F386B'}
                        defaultTitleColor={'#1F386B'}
                        completeColor='#666666'
                        titleTop={ 4 }
                        activeTitleColor='#C2B45F'
                        />
                       <h3>{ steps[page] }</h3>
                     </div>
                     <form onSubmit={ handleSubmit }> 
                            { activePage }
                            <div className={ page > 0 ? 'buttons1' : 'buttons2'}>
                                {page > 0 && (
                                  <button type='button'  onClick={ this.previous }>
                                    « Prev
                                  </button>
                                )}
                                {!isLastPage && <button type='submit'>Next »</button>}
                                {isLastPage && (
                                  <button type='submit' disabled={ submitting }>
                                    Submit
                                  </button>
                                )}
                            </div> 
                        <pre>{/*JSON.stringify(values, 0, 2)*/}</pre>
                     </form>
                  </div>
                )}
            />
          )
       }              
}

export default Wizard ;