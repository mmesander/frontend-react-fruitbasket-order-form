import React from 'react';

function Input({label, description, type, name, value, onChange, children}) {
    return (
        <label htmlFor={label}>
            {description}
            <input
                type={type}
                id={label}
                name={name}
                value={value}
                onChange={onChange}
            >
                {children}
            </input>
        </label>
    )
}

export default Input;