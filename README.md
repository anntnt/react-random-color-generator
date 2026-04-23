# React Random Color Generator

Design and develop a random color generator web application using React. This application will show a random color when a button is clicked:

- [x] A button with the exact text `Generate` will cause a new color to be generated when it is clicked
- [x] Once a color is generated, update the background color of a div which contains the exact text `Generated Color: <background color hex code>` (the background color and the hex code must match)
- [x] Allow users to specify the hue, such as red, green, blue, or random
- [x] Allow users to specify the luminosity, such as light, dark, bright, or random
- [x] Transition smoothly between colors as they change
- [x] Allow users to specify the size of the color box
- [x] Add a screensaver mode where the color box moves diagonally, bounces off screen edges, and changes color

## Installation

Install the project dependencies:

```bash
pnpm install
```

## Development

Start the development server:

```bash
pnpm dev
```

Open the local URL shown in the terminal, usually:

```txt
http://localhost:3000
```

## Usage

1. Choose a hue and luminosity from the dropdown controls.
2. Adjust the color box size with the size slider.
3. Click `Generate` to create a random color.
4. Enable `Screensaver Mode` to let the color box move around the screen and change colors automatically.

## Build

Create a production build:

```bash
pnpm build
```
