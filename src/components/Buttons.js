/*===  IMPORTS DE MODULES =====*/
import React from 'react';
import { Fragment } from 'react';

class Buttons extends React.Component {
    constructor(props){
      super(props);
      /// On lie l'évènement handleClick à l'élément
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      console.log(e.target.value)
    }
    render() {
      return (
        <Fragment>
          <div className="row">
            <div className="col-xs-4">
              <button type="button" onClick={this.handleClick} className="btn" value="1">1</button>
            </div>
            <div className="col-xs-4">
              <button type="button" onClick={this.handleClick}  className="btn"  value="2">2</button>
            </div>
            <div className="col-xs-4">
              <button type="button" onClick={this.handleClick}  className="btn"  value="3">3</button>
            </div>
          </div>

        <div className="row">
          <div className="col-xs-4">
            <button type="button" onClick={this.handleClick}  className="btn"  value="4">4</button>
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={this.handleClick}  className="btn" value="5">5</button>
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={this.handleClick}  className="btn" value="6">6</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <button type="button" onClick={this.handleClick}  className="btn" value="7">7</button>
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={this.handleClick}  className="btn" value="8">8</button>
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={this.handleClick}  className="btn" value="9">9</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <button type="button" onClick={this.handleClick}  className="btn" value="+">+</button>
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={this.handleClick}  className="btn" value="0">0</button>
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={this.handleClick}  className="btn" value="-">-</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <button type="button" onClick={this.handleClick}  className="btn" value ="/">/</button>
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={this.handleClick}  className="btn" value="*">*</button>
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={this.handleClick}  className="btn" value="⟵">⟵</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 p-0">
            <button type="button" onClick={this.handleClick}  className="btn" value="=">=</button>
          </div>
          <div className="col-xs-6 p-0">
            <button type="button" onClick={this.handleClick}  className="btn" value="CE">CE</button>
          </div>
        </div>
        </Fragment>
      );
    }
}
/*====  EXPORTATION PAR DÉFAUT ===*/
export default Buttons;
