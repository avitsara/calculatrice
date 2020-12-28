import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
/*======= ON IMPORTE LES CLASSES ============================*/
import Calc from './Calc';

/*=== CLASSE PRINCIPALE DU PROGRAMME ====*/
class App extends React.Component {
    render(){
        return(
           <Fragment>
              <Calc>  </Calc>
           </Fragment>
        )
    }
}
/*====  EXPORTATION PAR DÉFAUT ===*/
export default App;
