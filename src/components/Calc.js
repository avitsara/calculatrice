/*===  IMPORTS DE MODULES =====*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import Number from './Number';
import Symbol from './Symbol';
import TextArea from './TextArea';


/*==== CLASSE QUI VA CONTENIR TOUS LES AUTRES COMPOSANTS ======*/
class Calc extends React.Component {
  render(){
    return(
      <Fragment>
         <div className="row mt-5">
              <div className="col-md-12 d-flex justify-content-center">
                   <form className="Cal">
                         <div className="row ">
                             <TextArea onChange={this.handleChange}> </TextArea>
                         </div>
                         <Number onClick={this.handleClickNumber}> </Number>
                         <Symbol onClick={this.handleSymbol}> </Symbol>
                    </form>
                </div>
        </div>
    </Fragment>
    )
  }
}
/*================= EXPORTATION =========================================*/
export default Calc;
