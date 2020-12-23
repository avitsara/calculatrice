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
        this.handleTextArea = this.handleTextArea.bind(this);
    }
    // Fonction permettant de gérer les 
    // évènements dans la zone de saisie 
    handleTextArea(e){

    }

    render(){
        return(
            <Fragment>
            <div className="row">
                <div className="col-xs-4">
                    <button type="button" className="symbol">+</button>
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
            </Fragment>
        )
    }
        
}
/*=== EXPORTATION PAR DÉFAUT DU COMPOSANT SYMBOL  =====*/
export default Symbol;