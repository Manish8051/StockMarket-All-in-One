/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cornflowerblue: "#4d88e2",
        black: "#000",
        rosybrown: "#a07f7f",
        white: "#fff",
        gainsboro: "#d9d9d9",
        gray: {
          "100": "#262a39",
          "200": "#24242a",
          "300": "#310c0c",
          "400": "rgba(0, 0, 0, 0.7)",
          "500": "rgba(0, 0, 0, 0.41)",
        },
        steelblue: "rgba(29, 97, 162, 0.5)",
        darkslategray: "rgba(32, 63, 91, 0.5)",
        deepskyblue: {
          "100": "#2aabee",
          "200": "#229ed9",
        },
        lavender: "#d9e3fb",
        blueviolet: "#9747ff",
        dimgray: {
          "100": "#746b6b",
          "200": "#5f5959",
        },
        mintcream: "#fafffb",
        lightsteelblue: {
          "100": "#bdcef6",
          "200": "#b3cefb",
          "300": "#a9c2d6",
        },
      },
      spacing: {},
      fontFamily: {
        fraunces: "Fraunces",
        inherit: "inherit",
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
        "8xs": "5px",
        "3xs": "10px",
        sm: "14px",
        "base-5": "15.5px",
        mini: "15px",
        "8xl-7": "27.7px",
      },
    },
    fontSize: {
      "lg-8": "18.8px",
      "5xl": "24px",
      "17xl": "36px",
      "77xl": "96px",
      "3xl-5": "22.5px",
      xl: "20px",
      xs: "12px",
      "lg-6": "18.6px",
      "29xl-1": "48.1px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
