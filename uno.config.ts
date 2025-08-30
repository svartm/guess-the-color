import { defineConfig, presetAttributify, presetTagify, presetWebFonts, presetWind3 } from 'unocss'

export default defineConfig({
	presets: [
    presetAttributify(),
    presetTagify(),
    presetWebFonts({
      fonts: {
        sans: 'Geist',
        mono: 'Geist Mono',
      }
    }),
    presetWind3(),
  ],
  rules: [
    [
      "color-display",
      {
        width: "400px",
        height: "400px",
        position: "relative", // circles inside will use absolute
        margin: "0 auto",     // horizontal centering
        border: "1px solid #888", // optional visual boundary
        "background-color": "#000", // optional background
      },
    ],
    [
      /^circle-(r|g|b)-(\d+)-(\d+)$/,
      ([, colorKey, size, angle]) => {
        const colors: Record<string, string> = {
          r: "#FF0000",
          g: "#00FF00",
          b: "#0000FF",
        };
        const dist = Number(size) / 7;
        return {
          width: `${size}px`,
          height: `${size}px`,
          "border-radius": "50%",
          background: colors[colorKey],
          position: "absolute",   // absolute inside box
          top: "50%",
          left: "50%",
          transform: `translate(calc(-50% + cos(${angle}deg) * ${dist}px),
                                calc(-50% - sin(${angle}deg) * ${dist}px))`,
          "mix-blend-mode": "screen",
        };
      },
    ],
  ],
});
