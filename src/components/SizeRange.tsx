import { Field, Label } from '@headlessui/react';

type SizeRangeProps = {
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
};

export default function SizeRange({ size, setSize }: SizeRangeProps) {
  return (
    <Field className="mt-3 w-60 text-left accent-fuchsia-600">
      <Label className="mb-2 block text-sm font-medium font-semibold text-zinc-700">
        Box Size: {size}px
      </Label>
      <input
        type="range"
        min="150"
        max="300"
        step="10"
        value={size}
        onChange={(event) => setSize(Number(event.currentTarget.value))}
        className="w-full"
      />
    </Field>
  );
}
