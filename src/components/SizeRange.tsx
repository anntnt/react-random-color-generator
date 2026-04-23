import { Field, Label } from '@headlessui/react';

type SizeRangeProps = {
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
};

export default function SizeRange({ size, setSize }: SizeRangeProps) {
  return (
    <Field className="mt-3 w-56 text-left">
      <Label className="mb-1 block text-sm font-medium text-slate-700">
        Box Size: {size}px
      </Label>
      <input
        type="range"
        min="150"
        max="400"
        step="10"
        value={size}
        onChange={(event) => setSize(Number(event.currentTarget.value))}
        className="w-full"
      />
    </Field>
  );
}
