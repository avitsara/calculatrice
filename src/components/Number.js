/*===  IMPORTS DE MODULES =====*/
import React from 'react';
import ReactDOM from 'react-dom';


/*===  CRÉATION DU COMPOSANT REACT NUMBER   =====*/
const Number = () => (
    <div>
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
        </div>
)
/*=== EXPORTATION PAR DÉFAUT DE L'OBJET NUMBER ===*/
export default Number
