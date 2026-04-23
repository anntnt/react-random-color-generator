
import { useState, useCallback } from 'react';
import { useScreensaver } from './hooks/useScreensaver';
import './components/ColorDisplay';
import { ColorDisplay } from './components/ColorDisplay';
import ScreensaverCheckbox from './components/ScreensaverCheckbox';
import { HueListBox, LuminosityListBox } from './components/RandomColorListBox';
import SizeRange from './components/SizeRange';
import { hueOptions, luminosityOptions } from './lib/type';
import { getRandomColor } from './lib/getRandomColor';

export default function App() {
  const [hue, setHue] = useState(hueOptions[0]!);
  const [luminosity, setLuminosity] = useState(luminosityOptions[0]!);
  const [size, setSize] = useState(200);
  const [color, setColor] = useState('#ffffff');
  const [isScreensaverEnabled, setIsScreensaverEnabled] = useState(false);

  const colorGenerateHandler = () => {
    setColor(getRandomColor(hue.value, luminosity.value));
  };  

  const screensaverColorChangeHandler = useCallback(() => {
    setColor(getRandomColor('random', 'random'));
  }, []);

  const screensaverPosition = useScreensaver({
    enabled: isScreensaverEnabled,
    size,
    onColorChange: screensaverColorChangeHandler,
  });

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-14 text-slate-900">
      <main className="mx-auto flex max-w-5xl flex-col justify-items items-center gap-8 rounded-2xl bg-white px-8 py-8 sm:py-20 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Random Color Generator
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Generate a random color on clicking the button or let the screensaver
            run
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row max-w-5xl gap-10 items-center overflow-hidden px-6 text-center"
        >
          <ColorDisplay
            color={color}
            size={size}
            isScreensaverEnabled={isScreensaverEnabled}
            screensaverPosition={screensaverPosition}
          />
          <div className="flex flex-col items-sart w-full gap-5 order-2 md:order-1 md:w-80">
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
              onClick={colorGenerateHandler}
              disabled={isScreensaverEnabled}
              className="w-56 cursor-pointer rounded-lg border border-slate-600 bg-sky-600 px-4 mt-3 mb-1
              py-3 text-white text-base font-semibold shadow-sm hover:bg-sky-700 disabled:cursor-not-allowed 
              disabled:opacity-50 focus:outline-none focus:ring-2 
              focus:ring-sky-500 focus:ring-offset-2"
            >
              Generate
            </button>            
          </div>
        </div>
      </main>
    </div>
  );
}
