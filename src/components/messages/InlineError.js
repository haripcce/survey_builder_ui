import React from 'react';
import PropTypes from 'prop-types';

const  InlineError = ({text}) => {
    return (
        <span class="help-block"><span style={{fontSize:'100%'}}>{text}</span></span>
    );
}
InlineError.propTypes = {
    text: PropTypes.string.isRequired
};
export default InlineError;