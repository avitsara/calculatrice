import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return(
           <div>
            <div class="row mt-5">
                <div class="col-md-12 d-flex justify-content-center">
                    <form name="Cal">
                        <div class="row ">
                                <div class="col-md-12 p-0">
                                <div class="form-group">
                                    <textarea class="form-control" rows="3" id="total" type="text" name="ans"></textarea>
                                </div>
                                </div>
                         </div>
                <div class="row">
                    <div class="col-xs-4">
                        <button type="button" className="number">1</button>
                    </div>
                        <div class="col-xs-4">
                            <button type="button" className="number" >2</button>
                        </div>
                        <div class="col-xs-4">
                            <button type="button" className="number">3</button>
                        </div>
                    </div>
                        <div class="row">
                            <div class="col-xs-4">
                            <button type="button" className="number">4</button>
                            </div>
                            <div class="col-xs-4">
                            <button type="button" className="number">5</button>
                            </div>
                            <div class="col-xs-4">
                            <button type="button" className="number">6</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-4">
                            <button type="button" className="number">7</button>
                            </div>
                            <div class="col-xs-4">
                            <button type="button" className="number">8</button>
                            </div>
                            <div class="col-xs-4">
                            <button type="button" className="number">9</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-4">
                            <button type="button" className="symbol">+</button>
                            </div>
                            <div class="col-xs-4">
                            <button type="button" className="number">0</button>
                            </div>
                            <div class="col-xs-4">
                            <button type="button" className="symbol">-</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-4">
                            <button type="button" className="symbol">/</button>
                            </div>
                            <div class="col-xs-4">
                            <button type="button" className="symbol">*</button>
                            </div>
                            <div class="col-xs-4">
                            <button type="button" className="symbol">⟵</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6 p-0">
                            <button type="button" className="symbol">=</button>
                            </div>
                            <div class="col-xs-6 p-0">
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
