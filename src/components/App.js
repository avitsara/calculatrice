import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
/*============ IMPORTS D'ÉLÉMENTS REACT =============================================*/
import {Buttons} from './Buttons';
import {TextArea} from './TextArea';

/*=== CLASSE PRINCIPALE DU PROGRAMME ====*/
class App extends React.Component {
    constructor(props){
      super(props);
      this.state={
        input:""
      }
    }

    addToInput = val => {
      this.setState({input: this.state.input + val });
    }

    render(){
        return(
           <Fragment>
             <div className="row mt-5">
                   <div className="col-md-12 d-flex justify-content-center">
                      <form name="Cal">
                        <div className="row ">
                           <div className="col-md-12 p-0">
                             <div className="form-group">
                                <TextArea input={this.state.input}>   </TextArea>
                             </div>

                           </div>

                       </div>
                          <div className="row">
                              <div className="col-xs-4">
                                  <Buttons handleClick={this.addToInput}>1</Buttons>
                                  <Buttons handleClick={this.addToInput}>2</Buttons>
                                  <Buttons handleClick={this.addToInput}>3</Buttons>
                              </div>
                          </div>

                          <div className="row">
                              <div className="col-xs-4">
                                  <Buttons handleClick={this.addToInput}>4</Buttons>
                                  <Buttons handleClick={this.addToInput}>5</Buttons>
                                  <Buttons handleClick={this.addToInput}>6</Buttons>
                              </div>
                          </div>

                          <div className="row">
                              <div className="col-xs-4">
                                  <Buttons handleClick={this.addToInput}>7</Buttons>
                                  <Buttons handleClick={this.addToInput}>8</Buttons>
                                  <Buttons handleClick={this.addToInput}>9</Buttons>
                              </div>
                          </div>


                         <div className="row">
                              <div className="col-xs-4">
                                  <Buttons handleClick={this.addToInput}>-</Buttons>
                                  <Buttons handleClick={this.addToInput}>0</Buttons>
                                  <Buttons handleClick={this.addToInput}>=</Buttons>
                              </div>
                        </div>

                        <div className="row">
                             <div className="col-xs-4">
                                 <Buttons handleClick={this.addToInput}>*</Buttons>
                                 <Buttons handleClick={this.addToInput}>/</Buttons>
                                 <Buttons handleClick={this.addToInput}>CE</Buttons>
                             </div>
                       </div>


                       <div className="row">
                            <div className="col-xs-4">
                                <Buttons handleClick={this.addToInput}>+</Buttons>
                                <Buttons handleClick={this.addToInput}>AC</Buttons>
                                <Buttons  handleClick={this.addToInput}>%</Buttons>
                            </div>
                      </div>

                     </form>
                    </div>

            </div>


           </Fragment>
        );
    }
}
/*====  EXPORTATION PAR DÉFAUT ===*/
export default App;
