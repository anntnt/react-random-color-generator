// Chooses a readable text color based on the background brightness.
// Returns white for dark backgrounds and black for light backgrounds.

export function getTextColor(backgroundColor: string) {
  const hex = backgroundColor.replace('#', '');

  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4, 6), 16);

  const brightness = red * 0.299 + green * 0.587 + blue * 0.114;

  return brightness < 128 ? 'white' : 'black';
}
