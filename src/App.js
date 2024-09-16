// import { argv, exit } from 'node:process';
// import { hex } from 'ansis';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const rColor = randomColor();
  const [color, setColor] = useState(rColor);
  const [colorInput, setColorInput] = useState();

  return (
    <>
      <h1>Random Color</h1>

      <div style={{ backgroundColor: color, padding: '50px' }}>
        Generated Color: &lt;background color {color}&gt;
      </div>
      <button
        value={colorInput}
        onClick={() => {
          const newColor = randomColor();
          setColor(newColor);
        }}
      >
        Generate
      </button>
    </>
  );
}
