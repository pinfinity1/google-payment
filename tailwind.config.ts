import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "white" : "#FFF",
        "black" : "#000",
        "pr-green-60" : "#CAFF33" ,
        "pr-green-65" : "#D1FF4C",
        "pr-green-70" : "#D8FF66",
        "pr-green-80" : "#E5FF99",
        "pr-green-90" : "#F2FFCC",
        "pr-green-95" : "#F8FFE5",
        "pr-green-97" : "#FBFFF0",
        "pr-green-99" : "#FEFFFA",
        "white-shade-90" : "#E4E4E7",
        "white-shade-95" : "#F1F1F3",
        "white-shade-97" : "#F7F7F8",
        "white-shade-99" : "#FCFCFD",
        "grey-shade-10" : "#191919" ,
        "grey-shade-11" : "#1C1C1C" ,
        "grey-shade-15" : "#262626" ,
        "grey-shade-20" : "#333333" ,
        "grey-shade-30" : "#4C4C4D" ,
        "grey-shade-35" : "#59595A" ,
        "grey-shade-40" : "#656567" ,
        "grey-shade-60" : "#98989A" ,
        "grey-shade-70" : "#B3B3B3" ,
        "grey-shade-75" : "#BFBFBF" ,
      },
    },
  },
  plugins: [],
} satisfies Config;
