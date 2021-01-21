/*===  IMPORTS DE MODULES =====*/
import React from 'react';
import { Fragment } from 'react';

export const Buttons = props =>
<button type="button" className="btn" onClick={()=> props.handleClick(props.children)}>{props.children}</button>

/*====  EXPORTATION PAR DÉFAUT ===*/
export default Buttons;
