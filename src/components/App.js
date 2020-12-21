import React from 'react';
import ReactDOM from 'react-dom';
import Number from './Number';
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
                                    <textarea className="form-control" rows="3" id="total" type="text" name="ans"></textarea>
                                </div>
                            </div>
            </div>
                         <Number> </Number>
                        <div className="row">
                            <div className="col-xs-4">
                            <button type="button" className="symbol">+</button>
                            </div>
                            <div className="col-xs-4">
                            <button type="button" className="number">0</button>
                            </div>
                            <div className="col-xs-4">
                            <button type="button" className="symbol">-</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4">
                            <button type="button" className="symbol">/</button>
                            </div>
                            <div className="col-xs-4">
                            <button type="button" className="symbol">*</button>
                            </div>
                            <div className="col-xs-4">
                            <button type="button" className="symbol">⟵</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 p-0">
                            <button type="button" className="symbol">=</button>
                            </div>
                            <div className="col-xs-6 p-0">
                            <button type="button" className="symbol">CE</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
             </div>

        )
    }

}



/*====  EXPORTATION PAR DÉFAUT ===*/
export default App;
