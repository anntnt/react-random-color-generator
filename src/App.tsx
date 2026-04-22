import randomColor from 'randomcolor';
import { useState, useCallback } from 'react';
import { useScreensaver } from './hooks/useScreensaver';
import './components/ColorDisplay';
import { ColorDisplay } from './components/ColorDisplay';
import ScreensaverCheckbox from './components/ScreensaverCheckbox';
import { HueListBox, LuminosityListBox } from './components/RandomColorListBox';
import SizeRange from './components/SizeRange';
import { hueOptions, luminosityOptions } from './lib/type';

export default function App() {
  const [hue, setHue] = useState(hueOptions[0]!);
  const [luminosity, setLuminosity] = useState(luminosityOptions[0]!);
  const [size, setSize] = useState(200);
  const [color, setColor] = useState('#ffffff');
  const [isScreensaverEnabled, setIsScreensaverEnabled] = useState(false);

  const generateColor = useCallback(
    (
      hueValue: (typeof hueOptions)[number]['value'],
      luminosityValue: (typeof luminosityOptions)[number]['value'],
    ) => {
      setColor(
        randomColor({
          hue: hueValue,
          luminosity: luminosityValue,
        }),
      );
    },
    [],
  );
  
  const screensaverPosition = useScreensaver({
    enabled: isScreensaverEnabled,
    size,
    onColorChange: () => generateColor('random', 'random'),
  });
  return (
    <div className="bg-white px-6 py-8 text-slate-900 flex flex-col gap-6 justify-center items-center">
      <h1 className="m-0 text-[30px] font-semibold text-center">
        Random Color Generator
      </h1>
      <p className="text-center">
        Generate a random color on clicking the button or let the screensaver
        run
      </p>

      <div
        className="flex flex-col md:flex-row max-w-5xl gap-10 items-center
      overflow-hidden px-6 text-center"
      >
        <ColorDisplay
          color={color}
          size={size}
          isScreensaverEnabled={isScreensaverEnabled}
          screensaverPosition={screensaverPosition}
        />
        <div className="flex flex-col items-start space-y-6 order-2 md:order-1 w-100 md:w-80">
          <HueListBox
            options={hueOptions}
            selectedHue={hue}
            onChange={(selectedHue) => {
              const nextHue = hueOptions.find(
                (option) => option.value === selectedHue,
              );
              if (nextHue) setHue(nextHue);
            }}
            disabled={isScreensaverEnabled}
          />
          <LuminosityListBox
            options={luminosityOptions}
            selectedLuminosity={luminosity}
            onChange={(selectedLuminosity) => {
              const nextLuminosity = luminosityOptions.find(
                (option) => option.value === selectedLuminosity,
              );
              if (nextLuminosity) setLuminosity(nextLuminosity);
            }}
            disabled={isScreensaverEnabled}
          />
          <SizeRange size={size} setSize={setSize} />
          <ScreensaverCheckbox
            enabled={isScreensaverEnabled}
            setEnabled={setIsScreensaverEnabled}
          />
          <button
            onClick={() => generateColor(hue.value, luminosity.value)}
            disabled={isScreensaverEnabled}
            className="w-56 cursor-pointer rounded-lg border border-slate-600 bg-sky-600 px-4 py-2.5 text-[20px] text-white hover:bg-sky-700
              disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-sky-600
              focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
