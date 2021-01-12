/*===  IMPORTS DE MODULES =====*/
import React from 'react';
import { Fragment } from 'react';

class TextArea extends React.Component {
  render() {
    return (
       <Fragment>
          <div className="row ">
             <div className="col-md-12 p-0">
               <div className="form-group">
                 <textarea className="form-control" rows="10" id="total" type="text" name="ans" height="30px"></textarea>
               </div>

             </div>

         </div>

       </Fragment>
    )
  }
}
/*====  EXPORTATION PAR DÉFAUT ===*/
export default TextArea;
