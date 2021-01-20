/*===  IMPORTS DE MODULES =====*/
import React from 'react';
import { Fragment } from 'react';
import Buttons from './Buttons';


class TextArea extends React.Component {
    constructor(){
      super();
     
    


    }
   
    render() {
      return (
         <Fragment>
         
            <div className="row ">
               <div className="col-md-12 p-0">
                 <div className="form-group">
                   <textarea className="result" value="" onChange="" rows="10" id="total" type="text" name="ans" height="30px">

                   </textarea>
                 </div>

               </div>

           </div>

         </Fragment>
      )
    }
}
/*====  EXPORTATION PAR DÉFAUT ===*/
export default TextArea;
