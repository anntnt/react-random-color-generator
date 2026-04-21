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
import { HueValue, luminosityOptions, LuminosityValue } from '../lib/type';
import { hueOptions } from '../lib/type';


type HueListBoxProps = {
  options: typeof hueOptions;
  selectedHue: typeof hueOptions[number] ;
  onChange: Dispatch<SetStateAction<HueValue>>;
};

type LuminosityListBoxProps = {
  options: typeof luminosityOptions;
  selectedLuminosity: typeof luminosityOptions[number] ;
  onChange: Dispatch<SetStateAction<LuminosityValue>>;
};
export function HueListBox(props:HueListBoxProps) {

  return (
    <Field className="mt-6 w-56 text-left">
      <Label className="mb-1 block text-sm font-medium text-slate-700">
        Hue:
      </Label>
      <Listbox value={props.selectedHue.value} onChange={props.onChange}>
        <ListboxButton className="relative block w-full rounded-lg border border-slate-300 bg-white py-2 pr-8 pl-3 text-left 
        text-sm text-slate-900 shadow-sm focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 
        data-focus:outline-sky-500">
          {props.selectedHue.label}
          <ChevronDownIcon
            className="pointer-events-none absolute top-2.5 right-2.5 size-4 fill-slate-500"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className="mt-1 w-[var(--button-width)] rounded-xl border border-slate-200 bg-white p-1 shadow-lg focus:outline-none"
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
    <Field className="mt-6 w-56 text-left">
      <Label className="mb-1 block text-sm font-medium text-slate-700">
        Luminosity:
      </Label>
      <Listbox value={props.selectedLuminosity.value} onChange={props.onChange}>
        <ListboxButton className="relative block w-full rounded-lg border border-slate-300 bg-white py-2 pr-8 pl-3 text-left 
        text-sm text-slate-900 shadow-sm focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 
        data-focus:outline-sky-500">
          {props.selectedLuminosity.label}
          <ChevronDownIcon
            className="pointer-events-none absolute top-2.5 right-2.5 size-4 fill-slate-500"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className="mt-1 w-[var(--button-width)] rounded-xl border border-slate-200 bg-white p-1 shadow-lg focus:outline-none"
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
