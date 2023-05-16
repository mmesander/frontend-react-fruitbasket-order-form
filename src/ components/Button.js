import React from 'react';

function Button({children, buttonType, buttonClass, handleClick, disableButton}) {
    return (
        <button
            type={buttonType}
            className={buttonClass}
            onClick={handleClick}
            disabled={disableButton}
        >
            {children}
        </button>
    );
}

export default Button;