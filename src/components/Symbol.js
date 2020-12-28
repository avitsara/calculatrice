/**
 * Symbol : élément qui va représenter les symboles
 * de la calculatrice
 */
/*===  IMPORTS DE MODULES =====*/
import React from 'react';
import { Fragment } from 'react';

/*=====  CRÉATION DE L'ÉLÉMENT SYMBOL ======================*/
class Symbol extends React.Component {
    constructor(props){
        super(props);
        this.handleSymbol = this.handleSymbol.bind(this);
    }
    // Fonction permettant de gérer les
    // évènements dans la zone de saisie
    handleSymbol(e){
      console.log(e.target.value);
    }

    render(){
        return(
            <Fragment>
            <div className="row">
                <div className="col-xs-4">
                    <button type="button" className="symbol" onClick={this.handleSymbol} value="+">+</button>
                </div>

                <div className="col-xs-4">
                        <button type="button" className="symbol" onClick={this.handleSymbol} value="-">-</button>
                </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4">
                            <button type="button" className="symbol" onClick={this.handleSymbol} value="/">/</button>
                            </div>
                            <div className="col-xs-4">
                            <button type="button" className="symbol" onClick={this.handleSymbol} value="*">*</button>
                            </div>
                            <div className="col-xs-4">
                            <button type="button" className="symbol" onClick={this.handleSymbol} value="⟵">⟵</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 p-0">
                            <button type="button" className="symbol" onClick={this.handleSymbol} value="=">=</button>
                            </div>
                            <div className="col-xs-6 p-0">
                            <button type="button" className="symbol" onClick={this.handleSymbol} value="CE">CE</button>
                            </div>
            </div>
            </Fragment>
        )
    }

}
/*=== EXPORTATION PAR DÉFAUT DU COMPOSANT SYMBOL  =====*/
export default Symbol;
