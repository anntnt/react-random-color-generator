import { getTextColor } from "../lib/getTextColor";

type ColorDisplayProps = {
  color: string;
  size: number;
  isScreensaverEnabled: boolean;
  screensaverPosition: {
    x: number;
    y: number;
  };
};

export function ColorDisplay({
  color,
  size,
  isScreensaverEnabled,
  screensaverPosition,
}: ColorDisplayProps) {
  
  const textColor = getTextColor(color);

  const colorBox = (
    <div
      className="box-border flex flex-col items-center justify-center rounded-2xl border-2 text-center shadow-xl shadow-slate-900/20 order-1 md:order-2"
      style={{
        position: isScreensaverEnabled ? 'fixed' : undefined,
        left: isScreensaverEnabled ? screensaverPosition.x : undefined,
        top: isScreensaverEnabled ? screensaverPosition.y : undefined,
        backgroundColor: color,
        color: textColor,
        borderColor: textColor,
        transition: 'background-color 0.5s ease',
        width: `${size}px`,
        height: `${size}px`,
        zIndex: isScreensaverEnabled ? 500 : undefined,
      }}
    >
      <div className="font-bold">Generated Color:</div>
      <div className="mt-2 font-mono text-lg font-semibold">{color}</div>
    </div>
  );

  if (isScreensaverEnabled) {
    return (
      <div
        className="order-1 md:order-2"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {colorBox}
      </div>
    );
  }

  return colorBox;
}
