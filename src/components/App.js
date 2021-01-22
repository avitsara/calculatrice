import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
/*============ IMPORTS D'ÉLÉMENTS REACT =============================================*/
import {Buttons} from './Buttons';
import {TextArea} from './TextArea';
import {ClearButton} from './ClearButton';

/*=== CLASSE PRINCIPALE DU PROGRAMME ====*/
class App extends React.Component {
    constructor(props){
      super(props);
      this.state={
        input:""
      }
    }
    /// Fonction qui permet de mettre à jour le contenu
    // de TextArea
    updateInput = val => {
      this.setState({input: this.state.input + val });

    }
/// Fonction permettant de faire des calculs
    calculate = () => {
      this.setState({input: eval(this.state.input)});
      console.log(this.state.input);
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
                                  <Buttons handleClick={this.updateInput}>1</Buttons>
                                  <Buttons handleClick={this.updateInput}>2</Buttons>
                                  <Buttons handleClick={this.updateInput}>3</Buttons>
                              </div>
                          </div>

                          <div className="row">
                              <div className="col-xs-4">
                                  <Buttons handleClick={this.updateInput}>4</Buttons>
                                  <Buttons handleClick={this.updateInput}>5</Buttons>
                                  <Buttons handleClick={this.updateInput}>6</Buttons>
                              </div>
                          </div>

                          <div className="row">
                              <div className="col-xs-4">
                                  <Buttons handleClick={this.updateInput}>7</Buttons>
                                  <Buttons handleClick={this.updateInput}>8</Buttons>
                                  <Buttons handleClick={this.updateInput}>9</Buttons>
                              </div>
                          </div>


                         <div className="row">
                              <div className="col-xs-4">
                                  <Buttons handleClick={this.updateInput}>-</Buttons>
                                  <Buttons handleClick={this.updateInput}>0</Buttons>
                                  <Buttons handleClick={()=> this.calculate()}>=</Buttons>
                              </div>
                        </div>

                        <div className="row">
                             <div className="col-xs-4">
                                 <Buttons handleClick={this.updateInput}>*</Buttons>
                                 <Buttons handleClick={this.updateInput}>/</Buttons>
                                   <ClearButton handleClear={() => this.setState({input:""})}> CE</ClearButton>
                             </div>
                       </div>


                       <div className="row">
                            <div className="col-xs-4">
                                <Buttons handleClick={this.updateInput}>+</Buttons>
                                <Buttons handleClick={this.updateInput}>AC</Buttons>
                                <Buttons  handleClick={this.updateInput}>%</Buttons>
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
