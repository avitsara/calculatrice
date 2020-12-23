import React from 'react';
import ReactDOM from 'react-dom';
/*======= ON IMPORTE LES CLASSES ============================*/
import Number from './Number';
import Symbol from './Symbol';
/*=== CLASSE PRINCIPALE DU PROGRAMME ====*/
class App extends React.Component {
    render(){
        return(
           <div>
            <div className="row mt-5">
                <div className="col-md-12 d-flex justify-content-center">
                    <form className="Cal">
                        <div className="row ">
                            <div className="col-md-12 p-0">
                                <div className="form-group">
                                    <textarea className="form-control" rows="3" id="total" type="text" value="textarea"> </textarea>
                                </div>
                            </div>
            </div>
                         <Number> </Number>
                         <Symbol> </Symbol>
                        </form>
                    </div>
                    </div>
             </div>

        )
    }

}



/*====  EXPORTATION PAR DÉFAUT ===*/
export default App;
