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
    <Field className="flex items-center gap-2 mt-3">
      <Checkbox
        checked={enabled}
        onChange={() => setEnabled((current) => !current)}
        className={`group block size-4 rounded border ${
          enabled ? 'bg-blue-500' : 'bg-white'
        }`}
      >
        <svg
          className={`stroke-white ${enabled ? 'opacity-100' : 'opacity-0'}`}
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
      <Label>Screensaver Mode</Label>
    </Field>
  );
}
