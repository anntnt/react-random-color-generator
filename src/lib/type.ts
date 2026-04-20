  export type LuminosityValue = 'light' | 'dark' | 'bright' | 'random';
  export type HueValue = 'red' | 'green' | 'blue' | 'random';

  export const hueOptions: { label: string; value: HueValue }[] = [
    { label: 'Random', value: 'random' },
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];
  export const luminosityOptions: { label: string; value: LuminosityValue }[] = [
    { label: 'Random', value: 'random' },
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'Bright', value: 'bright' },

  ];