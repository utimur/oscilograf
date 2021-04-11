import React from 'react';

const Button = ({color = 'white', text, style, ...props}) => {
    return (
        <button {...props} className="btn" style={{border: `1px solid ${color}`, color: color, ...style}}>
            {text}
        </button>
    );
};

export default Button;
