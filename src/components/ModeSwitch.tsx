import type { Dispatch, SetStateAction } from 'react';
import type { Mode } from '../lib/types';

type ModeSwitchProps = {
  mode: Mode;
  setMode: Dispatch<SetStateAction<Mode>>;
};

const modeOptions: { label: string; value: Mode }[] = [
  { label: 'Manual', value: 'manual' },
  { label: 'Screensaver', value: 'screensaver' },
];

export default function ModeSwitch({ mode, setMode }: ModeSwitchProps) {
  return (
    <fieldset className="mt-6">
      <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        Mode
      </legend>

      <div className="inline-flex p-1.5 ">
        {modeOptions.map((option) => {
          const isSelected = mode === option.value;
          const inputId = `mode-${option.value}`;

          return (
            <div key={option.value} className='px-4'>
              <input
                id={inputId}
                type="radio"
                name="mode"
                value={option.value}
                checked={isSelected}
                onChange={() => setMode(option.value)}
                className="sr-only"
                aria-label={option.label}
              />
              <label
                htmlFor={inputId}
                aria-label={option.label}
                className={`cursor-pointer rounded-lg px-4 py-2 text-base transition ${
                  isSelected
                    ? 'bg-white text-slate-950 ring-1 ring-slate-200'
                    : 'text-slate-500 hover:bg-emerald-50 hover:text-emerald-700 hover:ring-1 hover:ring-emerald-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      isSelected ? 'bg-emerald-500' : 'bg-slate-300'
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    aria-hidden="true"
                    className="transition-colors"
                  >
                    {option.label}
                  </span>
                </span>
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}
