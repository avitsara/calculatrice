/**
** TextArea : élément qui va représenter la zone de saisie de texte
**/

/*===  IMPORTS DE MODULES =====*/
import React from 'react';
import { Fragment } from 'react';
import Number from './Number';
import Symbol from './Symbol'; 


class TextArea extends React.Component {
   constructor(props) {
    super(props);
     this.state = {value: ''};
   }

  handleChange(event) {
      this.setState({value: event.target.value});
  }


   render(){
     return(
       <Fragment>
           <div className="col-md-12 p-0">
                 <div className="form-group">
                      <textarea className="form-control" rows="3" id="total" type="text" value={this.state.value}    onChange={this.handleChange}> </textarea>
                 </div>
           </div>
     </Fragment>

     )
   }
}
/*=== EXPORTATION PAR DÉFAUT DU COMPOSANT TEXTAREA  =====*/
export default TextArea;
