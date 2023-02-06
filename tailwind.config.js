module.exports = {
  important: true,
  prefix: "",
  content: ["./src/**/*.{html,js,scss,ts}"],
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "status-success": "#99CC00",
        "status-error": "#AF283F",
        "status-warning": "#FBB315",
        blumine: {
          100: "#edf2ff",
          200: "#34A7CF",
          300: "#298EB1",
          400: "#227490",
          DEFAULT: "#4263EB",
          600: "#0F3542",
          700: "#051014",
          800: "#00082f",
        },
        "chathams-blue": {
          400: "#5f869e",
          DEFAULT: "#1a5275",
          500: "rgba(35, 100, 112)",
          600: "#174a69",
          700: "#143e58",
        },
        "cerise-red": {
          100: "#fff0f6",
          400: "#f37d9e",
          DEFAULT: "#D6336C",
          600: "#d63e68",
          700: "#b33457",
          800: "#1f000b",
        },
        downy: {
          400: "#9ad9d4",
          DEFAULT: "#6fc8c2",
          600: "#64b4af",
          700: "#539692",
        },
        casal: {
          400: "#65939b",
          DEFAULT: "#236470",
          600: "#205a65",
          700: "#1a4b54",
        },
        alto: {
          200: "#F5F5F5",
          400: "#e7e7e7",
          DEFAULT: "#dddddd",
          600: "#c7c7c7",
          700: "#a6a6a6",
        },
        mercury: {
          400: "#eeedef",
          DEFAULT: "#e6e5e8",
          600: "#cfced1",
          700: "#adacae",
        },
        "shuttle-gray": {
          400: "#94959a",
          DEFAULT: "#66676f",
          600: "#5c5d64",
          700: "#4d4d53",
        },
        iceberg: {
          400: "#F5FBFC",
          DEFAULT: "#D7EEF1",
          600: "#ADDCE2",
          700: "#84CBD4",
        },
        gray: {
          400: "#949494",
          DEFAULT: "#666666",
          600: "#5c5c5c",
          700: "#4d4d4d",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
