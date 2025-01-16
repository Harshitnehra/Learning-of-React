
import React from 'react';

function Colorswich({ handleChangeColor }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleChangeColor();
      }}
    >
      Change Color
    </button>
  );
}

export default Colorswich
