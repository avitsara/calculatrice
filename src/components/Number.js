/*===  IMPORTS DE MODULES =====*/
import React from 'react';


/*===  CRÉATION DU COMPOSANT REACT NUMBER   =====*/

class Number extends React.Component {
    constructor(props){
        super(props);
        /// liaison nécessaire afin de pouvoir utiliser 
        // this dans la fonction de rappel
        this.handleClickNumber = this.handleClickNumber.bind(this);
    }
    // 
    handleClickNumber(){
        console.log("click sur un number");
    }
    render(){
        return (
            <div>
            <div className="row">
                <div className="col-xs-4">
                    <button type="button" className="number" onClick={this.handleClickNumber}>1</button>
                </div>
                    <div className="col-xs-4">
                        <button type="button" className="number" onClick={this.handleClickNumber}>2</button>
                    </div>
                    <div className="col-xs-4">
                        <button type="button" className="number" onClick={this.handleClickNumber}>3</button>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-xs-4">
                          <button type="button" className="number" onClick={this.handleClickNumber}>4</button>
                        </div>
                        <div className="col-xs-4">
                          <button type="button" className="number" onClick={this.handleClickNumber}>5</button>
                        </div>
                        <div className="col-xs-4">
                          <button type="button" className="number" onClick={this.handleClickNumber}>6</button>
                        </div>
                    </div>
                    <div className="row">
                          <div className="col-xs-4">
                              <button type="button" className="number" onClick={this.handleClickNumber}>7</button>
                          </div>
                          <div className="col-xs-4">
                              <button type="button" className="number" onClick={this.handleClickNumber}>8</button>
                          </div>
                          <div className="col-xs-4">
                              <button type="button" className="number" onClick={this.handleClickNumber}>9</button>
                          </div>                       
                    </div>
                </div>
        )
    }
}
   

/*=== EXPORTATION PAR DÉFAUT DE L'OBJET NUMBER ===*/
export default Number
