import randomColor from 'randomcolor';
import { useEffect, useState } from 'react';
import './components/ColorDisplay';
import { ColorDisplay } from './components/ColorDisplay';
import ScreensaverCheckbox from './components/ScreensaverCheckbox';
import {HueListBox, LuminosityListBox} from './components/RandomColorListBox';
import { hueOptions, luminosityOptions } from './lib/type';

export default function App() {
  const [hue, setHue] = useState(hueOptions[0]!);
  const [luminosity, setLuminosity] = useState(luminosityOptions[0]!);
  const [size, setSize] = useState(200);
  const [color, setColor] = useState('#ffffff');
  const [isScreensaverEnabled, setIsScreensaverEnabled] = useState(false);

  const generateColor = () => {
    setColor(
      randomColor({
        hue: hue.value,
        luminosity: luminosity.value,
      }),
    );
  };


  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 text-center ">
      <h1 className="m-0 text-[30px] font-semibold">
        Random Color Generator
      </h1>
      <p className="mt-4">Pick a color manually or let the screensaver run</p>
      <HueListBox
        options={hueOptions}
        selectedHue={hue}
        onChange={(selectedHue) => {
          const nextHue = hueOptions.find((option) => option.value === selectedHue);
          if (nextHue) setHue(nextHue);
        }}
      />
      <LuminosityListBox
        options={luminosityOptions}
        selectedLuminosity={luminosity}
        onChange={(selectedLuminosity) => {
          const nextLuminosity = luminosityOptions.find((option) => option.value === selectedLuminosity);
          if (nextLuminosity) setLuminosity(nextLuminosity);
        }}
      />
      <ScreensaverCheckbox
        enabled={isScreensaverEnabled}
        setEnabled={setIsScreensaverEnabled}
      />
      <button
        onClick={generateColor}
        className="my-10 cursor-pointer rounded-2xl border border-slate-600 bg-sky-600 hover:bg-sky-700 px-4 py-2.5 text-[20px] text-white"
      >
        Generate
      </button>
      <ColorDisplay color={color} size={size} />
    </div>
  );
}
