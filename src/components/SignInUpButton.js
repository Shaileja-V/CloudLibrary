import React from 'react';

const Button = ({ paddingLeft, label, customColor, customLabel }) => {
  const buttonStyle = {
    cursor: 'pointer',
    top: '72px',
    paddingLeft: '8px', // Adjust padding as needed
    paddingRight: '8px', // Optional: Add right padding if needed
    width: 'auto', // Set width to auto or adjust as needed
    height: '62px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
    boxShadow: '2px 2px 0px rgba(0,0,0,0.8)',
    backgroundColor: customColor ? '#f0920d' : '#ffffff', // Use custom color if specified
    color: '#030303',
    fontSize: '18px',
    fontFamily: 'Roboto Mono',
    fontWeight: 600,
    lineHeight: '28px',
    textTransform: 'uppercase',
    outline: 'none',
  };

  return (
    <button style={buttonStyle}>
      {customLabel || label || 'Sign in'} {/* Use custom label if specified, fallback to label */}
    </button>
  );
};

export default Button;
