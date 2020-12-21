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
    handleClickNumber(e){
        ///console.log("click sur un number");
        console.log(e.target.value); 
    }
    render(){
        return (
            <div>
            <div className="row">
                
                <div className="col-xs-4">
                    <button type="button" className="number"  value="1" onClick={this.handleClickNumber}>1</button>
                </div>
                    <div className="col-xs-4">
                        <button type="button" className="number" value="2" onClick={this.handleClickNumber}>2</button>
                    </div>
                    <div className="col-xs-4">
                        <button type="button" className="number" value="3" onClick={this.handleClickNumber}>3</button>
                    </div>
                </div>
                    <div className="row">
       
                        <div className="col-xs-4">
                          <button type="button" className="number" value="4" onClick={this.handleClickNumber}>4</button>
                        </div>
                        <div className="col-xs-4">
                          <button type="button" className="number" value="5" onClick={this.handleClickNumber}>5</button>
                        </div>
                        <div className="col-xs-4">
                          <button type="button" className="number" value="6" onClick={this.handleClickNumber}>6</button>
                        </div>
                    </div>
                    <div className="row">
                          <div className="col-xs-4">
                              <button type="button" value="7" className="number" onClick={this.handleClickNumber}>7</button>
                          </div>
                          <div className="col-xs-4">
                              <button type="button" value="8" className="number" onClick={this.handleClickNumber}>8</button>
                          </div>
                          <div className="col-xs-4">
                              <button type="button" value="9" className="number" onClick={this.handleClickNumber}>9</button>
                          </div>                       
                    </div>
                </div>
        )
    }
}
   

/*=== EXPORTATION PAR DÉFAUT DE L'OBJET NUMBER ===*/
export default Number
