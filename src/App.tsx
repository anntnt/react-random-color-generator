import randomColor from 'randomcolor';
import { useState } from 'react';
import './components/ColorDisplay';
import { ColorDisplay } from './components/ColorDisplay';
import ModeSwitch from './components/ModeSwitch';
import type { Mode } from './lib/types';

export default function App() {
  const hueOptions = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];
  const [mode, setMode] = useState<Mode>('manual');
  const [hue, setHue] = useState(hueOptions[0]);
  const [luminosity, setLuminosity] = useState('light');
  const [size, setSize] = useState(200);
  const [color, setColor] = useState('#ffffff');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 text-center ">
      <h1 className="m-0 text-[30px] font-semibold">
        Random Color Generator
      </h1>
      <p className='mt-4'>Pick a color manually or let the screensaver run</p>
      <ModeSwitch mode={mode} setMode={setMode} />
      <button
        onClick={() => {
          setColor(randomColor());
        }}
        className="my-10 cursor-pointer rounded-2xl border border-slate-600 bg-sky-600 hover:bg-sky-700 px-4 py-2.5 text-[20px] text-white"
      >
        Generate
      </button>
      <ColorDisplay color={color} size={size} mode={mode} />
    </div>
  );
}
