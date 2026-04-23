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

export function ColorDisplay({ color, size, isScreensaverEnabled, screensaverPosition }: ColorDisplayProps) {
  const textColor = getTextColor(color);

  return (
    <div
      className="box-border flex flex-col items-center justify-center rounded-2xl 
      border-2 text-center shadow-xl shadow-slate-900/20 oder-1 md:order-2"
      style={isScreensaverEnabled ? {
        position: 'fixed',
        left: screensaverPosition.x,
        top: screensaverPosition.y,
        backgroundColor: color,
        color: textColor,
        borderColor: textColor,
        transition: "background-color 0.5s ease",
        width: `${size}px`,
        height: `${size}px`,
        zIndex: 500,
      } : {
        backgroundColor: color,
        color: textColor,
        borderColor: textColor,
        transition: "background-color 0.5s ease",
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div className="font-bold">Generated Color:</div>
      <div className="font-mono text-lg font-semibold mt-2">{color}</div>
    </div>
  );
}
