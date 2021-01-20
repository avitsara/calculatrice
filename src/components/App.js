import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
/*============ IMPORTS D'ÉLÉMENTS REACT =============================================*/
import Buttons from './Buttons';
import TextArea from './TextArea';

/*=== CLASSE PRINCIPALE DU PROGRAMME ====*/
class App extends React.Component {
    constructor(){
      super();
      
    }

    

    


    render(){
        return(
           <Fragment>
             <div className="row mt-5">
                   <div className="col-md-12 d-flex justify-content-center">
                      <form name="Cal">
                          <TextArea> </TextArea>
                          <Buttons onClick={this.handleClick}>   </Buttons>

                     </form>
                    </div>

            </div>


           </Fragment>
        );
    }
}
/*====  EXPORTATION PAR DÉFAUT ===*/
export default App;
