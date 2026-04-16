type ColorDisplayProps = {
  color: string;
  size: number;
  mode?: 'manual' | 'screensaver';
};

export function ColorDisplay({ color, size, mode }: ColorDisplayProps) {
  return (
    <div
      className="box-border flex flex-col items-center justify-center border-[5px] border-dotted border-[#666666] text-center"
      style={{
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div className="font-bold">Generated Color:</div>
      <div>{color}</div>
      <div className="mt-4 font-bold">Mode:</div>
      <div>{mode || 'manual'}</div>
    </div>
  );
}
