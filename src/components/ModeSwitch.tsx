import type { Dispatch, SetStateAction } from 'react';
import type { Mode } from '../lib/types';

type ModeSwitchProps = {
  mode: Mode;
  setMode: Dispatch<SetStateAction<Mode>>;
};

export default function ModeSwitch({ mode, setMode }: ModeSwitchProps) {
  return (
    <div className="mt-4 flex gap-2">
      <button
        type="button"
        onClick={() => setMode('manual')}
        aria-pressed={mode === 'manual'}
        className="rounded-xl border border-slate-600 px-4 py-2"
      >
        Manual
      </button>
      <button
        type="button"
        onClick={() => setMode('screensaver')}
        aria-pressed={mode === 'screensaver'}
        className="rounded-xl border border-slate-600 px-4 py-2"
      >
        Screensaver
      </button>
    </div>
  );
}