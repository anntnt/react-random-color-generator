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
    <div className="min-h-screen sm:bg-zinc-950 sm:px-6 md:py-10 xl:py-16 text-zinc-950">
      <main className="mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-2xl bg-white px-8 py-8 sm:shadow-2xl sm:shadow-fuchsia-950/30 sm:py-20">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Random Color Generator
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base font-medium text-zinc-600">
            Click the button to generate a random color, or enable screensaver
            mode to generate colors automatically.
          </p>
        </div>
        <div className="flex flex-col md:flex-row max-w-5xl gap-10 items-center overflow-hidden px-6 text-center">
          <ColorDisplay
            color={color}
            size={size}
            isScreensaverEnabled={isScreensaverEnabled}
            screensaverPosition={screensaverPosition}
          />
          <div className="flex flex-col items-start w-full gap-5 order-2 md:order-1 md:w-80">
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
              className="w-60 cursor-pointer rounded-lg border border-fuchsia-700 bg-fuchsia-600 px-4 mt-3 mb-1
              py-3 text-white text-base font-semibold shadow-sm shadow-fuchsia-900/30 hover:bg-fuchsia-700 disabled:cursor-not-allowed 
              disabled:opacity-50 focus:outline-none focus:ring-2 
              focus:ring-fuchsia-400 focus:ring-offset-2"
            >
              Generate
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
