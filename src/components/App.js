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
                        <button type="button" class="btn" onclick="Cal.ans.value += '1'">1</button>
                    </div>
                        <div class="col-xs-4">
                            <button type="button" class="btn" onclick="Cal.ans.value += '2'">2</button>
                        </div>
                        <div class="col-xs-4">
                            <button type="button" class="btn" onclick="Cal.ans.value += '3'">3</button>
                        </div>
                    </div>
                        <div class="row">
                            <div class="col-xs-4">
                            <button type="button" class="btn" onclick="Cal.ans.value += '4'">4</button>
                            </div>
                            <div class="col-xs-4">
                            <button type="button" class="btn" onclick="Cal.ans.value += '5'">5</button>
                            </div>
                            <div class="col-xs-4">
                            <button type="button" class="btn" onclick="Cal.ans.value += '6'">6</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-4">
                            <button type="button" class="btn" onclick="Cal.ans.value += '7'">7</button>
                            </div>
                            <div class="col-xs-4">
                            <button type="button" class="btn" onclick="Cal.ans.value += '8'">8</button>
                            </div>
                            <div class="col-xs-4">
                            <button type="button" class="btn" onclick="Cal.ans.value += '9'">9</button>	
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-4">
                            <button type="button" class="btn" onclick="Cal.ans.value += '+'">+</button>	
                            </div>
                            <div class="col-xs-4">
                            <button type="button" class="btn" onclick="Cal.ans.value += '0'">0</button>	
                            </div>
                            <div class="col-xs-4">
                            <button type="button" class="btn" onclick="Cal.ans.value += '-'">-</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-4">
                            <button type="button" class="btn" onclick="Cal.ans.value += '/'">/</button>
                            </div>
                            <div class="col-xs-4">
                            <button type="button" class="btn" onclick="Cal.ans.value += '*'">*</button>
                            </div>
                            <div class="col-xs-4">
                            <button type="button" class="btn" onclick="backspace()">⟵</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6 p-0">
                            <button type="button" class="btn" onclick=" Cal.ans.value = eval(Cal.ans.value)">=</button>
                            </div>
                            <div class="col-xs-6 p-0">
                            <button type="button" class="btn" onclick="clearscreen()">CE</button>
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