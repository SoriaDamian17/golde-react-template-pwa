import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = (props) => {

    const { title } = props;

    function handleClick() {
        if (props.href) {
            window.location.href = props.href;
        }
    }

    return (
        <button type="button" className={`button`} onClick={() => handleClick}>
            {title}
        </button>
    );
};

Button.defaultProps = {
    title: 'Text',
};

Button.propTypes = {
    title: PropTypes.string,
};

export default React.memo(Button);