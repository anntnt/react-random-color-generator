import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('hex code');

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Random Color Generator</h1>
      <button
        onClick={() => {
          setColor(randomColor());
        }}
        style={{
          fontSize: '20px',
          padding: '10px',
          margin: '40px',
        }}
      >
        Generate
      </button>
      <div
        style={{
          boxSizing: 'border-box',
          backgroundColor: color,
          padding: '40px 0',
          margin: 'auto',
          width: '400px',
          border: '5px dotted #666666',
        }}
      >
        Generated Color: &lt;background color {color}&gt;
      </div>
    </div>
  );
}
