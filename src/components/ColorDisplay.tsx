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
      className="box-border flex flex-col items-center justify-center border-[5px] border-dotted border-[#666666] text-center order-1 md:order-2"
      style={isScreensaverEnabled ? {
        position: 'fixed',
        left: screensaverPosition.x,
        top: screensaverPosition.y,
        backgroundColor: color,
        color: textColor,
        transition: "background-color 0.5s ease",
        width: `${size}px`,
        height: `${size}px`,
        zIndex: 500,
      } : {
        backgroundColor: color,
        color: textColor,
        transition: "background-color 0.5s ease",
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div className="font-bold">Generated Color:</div>
      <div>{color}</div>
    </div>
  );
}
