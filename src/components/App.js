import React from 'react';
import ReactDOM from 'react-dom';
/*======= ON IMPORTE LES CLASSES ============================*/
import Number from './Number';
import Symbol from './Symbol';
import TextArea from './TextArea';
/*=== CLASSE PRINCIPALE DU PROGRAMME ====*/
class App extends React.Component {
    render(){
        return(
           <div>
            <div className="row mt-5">
                <div className="col-md-12 d-flex justify-content-center">
                    <form className="Cal">
                        <div className="row ">
                         <TextArea> </TextArea>

            </div>
                         <Number> </Number>
                         <Symbol> </Symbol>
                        </form>
                    </div>
                    </div>
             </div>

        )
    }

}



/*====  EXPORTATION PAR DÉFAUT ===*/
export default App;
