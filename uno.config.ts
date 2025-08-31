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
        width: "300px",
        height: "300px",
        position: "relative",
        margin: "0 auto",
        "background-color": "#000",
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
          position: "absolute",
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
