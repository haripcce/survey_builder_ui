import React from 'react';
import PropTypes from 'prop-types';

const  InlineError = ({text}) => (
        <div className="invalid-feedback"><span style={{fontSize:'100%'}}>{text}</span></div>
    )
InlineError.propTypes = {
    text: PropTypes.string.isRequired
};
export default InlineError;