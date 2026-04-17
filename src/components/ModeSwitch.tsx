import type { Dispatch, SetStateAction } from 'react';
import { Switch } from '@headlessui/react';
import type { Mode } from '../lib/types';

type ModeSwitchProps = {
  mode: Mode;
  setMode: Dispatch<SetStateAction<Mode>>;
};

export default function ModeSwitch({ mode, setMode }: ModeSwitchProps) {
  const isScreensaver = mode === 'screensaver';
  const description = isScreensaver
    ? 'Colors rotate automatically'
    : 'Generate colors on demand';

  return (
    <div className="mt-6 w-full max-w-xl rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-left">
          <p className="text-lg font-semibold uppercase tracking-[0.05em] text-slate-500">
            Mode
          </p>
          <p className="text-sm text-slate-600">{description}</p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-center">
          <span
            className={`text-lg font-semibold transition-colors ${
              isScreensaver ? 'text-slate-400' : 'text-slate-900'
            }`}
          >
            Manual
          </span>

          <Switch
            checked={isScreensaver}
            onChange={(checked) =>
              setMode(checked ? 'screensaver' : 'manual')
            }
            className={`relative inline-flex h-10 w-16 cursor-pointer rounded-full border border-transparent 
              transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 
              ${isScreensaver ? 'bg-emerald-500' : 'bg-slate-300'
            }`}
          >
            <span className="sr-only">
              Toggle between manual and screensaver mode
            </span>
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute left-1 top-1 h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                isScreensaver ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </Switch>

          <span
            className={`text-lg font-semibold transition-colors ${
              isScreensaver ? 'text-slate-900' : 'text-slate-400'
            }`}
          >
            Screensaver
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2 text-sm text-slate-600">
        <span
          aria-hidden="true"
          className={`h-2.5 w-2.5 rounded-full ${
            isScreensaver ? 'bg-emerald-500' : 'bg-sky-500'
          }`}
        />
        <span>
          {isScreensaver
            ? 'Switch off to return to manual generation.'
            : 'Switch on to start the screensaver mode.'}
        </span>
      </div>
    </div>
  );
}
