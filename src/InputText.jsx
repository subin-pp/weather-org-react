import React from 'react';

const InputText = ({ setInputValue, handleKeyPress }) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '800px',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 2,
      }}
      className="input-container"
    >
      <input
        style={{
          width: '100%',
          maxWidth: '500px',
          padding: '10px 15px',
          fontSize: '16px',
          borderRadius: '40px',
          border: '2px solid black', 
          background: 'transparent',
          color: 'black', 
        }}
        type="text"
        placeholder="Enter city name"
        className="input-box"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress} 
      />
    </div>
  );
};

export default InputText;
