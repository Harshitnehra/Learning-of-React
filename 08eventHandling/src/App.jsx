import { useState } from 'react';
import './App.css';
import Colorswich from './Colorswich';

function App() {
  const [click, setClick] = useState(0);

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }

  function handleClickOutside() {
    setClick((c) => c + 1);
  }

  return (
    <div
      style={{ width: '300px', height: '300px', background: 'red' }}
      onClick={handleClickOutside}
    >
      <Colorswich handleChangeColor={handleChangeColor} />
      <br />
      <br />
      <h2>Clicks on the page: {click}</h2>
    </div>
  );
}

export default App;