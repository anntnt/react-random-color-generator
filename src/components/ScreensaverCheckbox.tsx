import type { Dispatch, SetStateAction } from 'react';
import { Checkbox, Field, Label } from '@headlessui/react';

type ModeSwitchProps = {
  enabled: boolean;
  setEnabled: Dispatch<SetStateAction<boolean>>;
};

export default function ScreensaverCheckbox({
  enabled,
  setEnabled,
}: ModeSwitchProps) {
  return (
    <Field className="mt-3 flex items-center gap-2">
      <Checkbox
        checked={enabled}
        onChange={() => setEnabled((current) => !current)}
        className={`group flex size-5 items-center justify-center rounded border-2 ${
          enabled
            ? 'border-fuchsia-600 bg-fuchsia-600'
            : 'border-fuchsia-300 bg-fuchsia-50'
        }`}
      >
        <svg
          className={`size-4 stroke-white ${enabled ? 'opacity-100' : 'opacity-0'}`}
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Checkbox>

      <Label className="text-sm font-medium text-zinc-700">
        Screensaver Mode
      </Label>
    </Field>
  );
}
