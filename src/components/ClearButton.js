/*===  IMPORTS DE MODULES =====*/
import React from 'react';
import { Fragment } from 'react';

export const ClearButton =  props =>
<button type="button" className="btn" onClick={props.handleClear}>{props.children}</button>
/*====  EXPORTATION PAR DÉFAUT ===*/
export default ClearButton;
