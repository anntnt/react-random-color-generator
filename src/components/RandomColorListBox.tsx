import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import type { Dispatch, SetStateAction } from 'react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { HueValue, hueOptions, luminosityOptions, LuminosityValue } from '../lib/type';

type HueListBoxProps = {
  options: typeof hueOptions;
  selectedHue: typeof hueOptions[number] ;
  onChange: Dispatch<SetStateAction<HueValue>>;
  disabled: boolean;
};

type LuminosityListBoxProps = {
  options: typeof luminosityOptions;
  selectedLuminosity: typeof luminosityOptions[number] ;
  onChange: Dispatch<SetStateAction<LuminosityValue>>;
  disabled: boolean;
};
export function HueListBox(props:HueListBoxProps) {

  return (
    <Field className="mt-3 w-56 text-left">
      <Label className="mb-2 block text-sm font-medium font-semibold text-slate-700">
        Hue:
      </Label>
      <Listbox value={props.selectedHue.value} onChange={props.onChange} disabled={props.disabled}>
        <ListboxButton className="relative mt-1 flex w-56 items-center justify-between rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-left text-sm font-medium text-slate-900 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400">
          {props.selectedHue.label}
          <ChevronDownIcon
            className="pointer-events-none absolute top-2.5 right-2.5 size-4 fill-slate-500"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className="mt-2 w-[var(--button-width)] rounded-lg border border-slate-200 bg-white p-1 shadow-xl shadow-slate-900/10 focus:outline-none"
        >
          {props.options.map((option) => (
            <ListboxOption
              key={`hue-${option.value}`}
              value={option.value}
              className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-900 select-none data-focus:bg-sky-100"
            >
              <CheckIcon className="invisible size-4 fill-sky-600 group-data-selected:visible" />
              <span>{option.label}</span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </Field>
  )
}

export function LuminosityListBox(props:LuminosityListBoxProps) {

  return (
    <Field className="mt-3 w-56 text-left">
      <Label className="mb-2 block text-sm font-medium font-semibold text-slate-700">
        Luminosity:
      </Label>
      <Listbox value={props.selectedLuminosity.value} onChange={props.onChange} disabled={props.disabled}>
        <ListboxButton className="relative mt-1 flex w-56 items-center justify-between rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-left text-sm font-medium text-slate-900 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400">
          {props.selectedLuminosity.label}
          <ChevronDownIcon
            className="pointer-events-none absolute top-2.5 right-2.5 size-4 fill-slate-500"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className="mt-2 w-[var(--button-width)] rounded-lg border border-slate-200 bg-white p-1 shadow-xl shadow-slate-900/10 focus:outline-none"
        >
          {props.options.map((option) => (
            <ListboxOption
              key={`luminosity-${option.value}`}
              value={option.value}
              className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-900 select-none data-focus:bg-sky-100"
            >
              <CheckIcon className="invisible size-4 fill-sky-600 group-data-selected:visible" />
              <span>{option.label}</span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </Field>
  )
}
