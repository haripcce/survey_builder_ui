import React from 'react';
import spinner from '../../spinner.svg';



const LoadingSpinnerForm = (props) => (
	<div id="spinnerDiv" style={ props.show ? { display:'block'} : {display : 'none'} } > 
    <img id="spinner" src={spinner} alt="" />
     </div>
)

export default LoadingSpinnerForm;