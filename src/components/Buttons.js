/*===  IMPORTS DE MODULES =====*/
import React from 'react';
import { Fragment } from 'react';

class Buttons extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <Fragment>
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

        <div className="row">
          <div className="col-xs-4">
            <button type="button" className="btn" onclick="Cal.ans.value += '4'">4</button>
          </div>
          <div className="col-xs-4">
            <button type="button" className="btn" onclick="Cal.ans.value += '5'">5</button>
          </div>
          <div className="col-xs-4">
            <button type="button" className="btn" onclick="Cal.ans.value += '6'">6</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <button type="button" className="btn" onclick="Cal.ans.value += '7'">7</button>
          </div>
          <div className="col-xs-4">
            <button type="button" className="btn" onclick="Cal.ans.value += '8'">8</button>
          </div>
          <div className="col-xs-4">
            <button type="button" className="btn" onclick="Cal.ans.value += '9'">9</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <button type="button" className="btn" onclick="Cal.ans.value += '+'">+</button>
          </div>
          <div className="col-xs-4">
            <button type="button" className="btn" onclick="Cal.ans.value += '0'">0</button>
          </div>
          <div className="col-xs-4">
            <button type="button" className="btn" onclick="Cal.ans.value += '-'">-</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <button type="button" className="btn" onclick="Cal.ans.value += '/'">/</button>
          </div>
          <div className="col-xs-4">
            <button type="button" className="btn" onclick="Cal.ans.value += '*'">*</button>
          </div>
          <div className="col-xs-4">
            <button type="button" className="btn" onclick="backspace()">⟵</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 p-0">
            <button type="button" className="btn" onclick=" Cal.ans.value = eval(Cal.ans.value)">=</button>
          </div>
          <div className="col-xs-6 p-0">
            <button type="button" className="btn" onclick="clearscreen()">CE</button>
          </div>
        </div>
        </Fragment>
      );
    }
}
/*====  EXPORTATION PAR DÉFAUT ===*/
export default Buttons;
