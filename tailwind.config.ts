import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "custom-purple": "rgb(26 7 39)", // Fixed typo here
      },
      backgroundImage: {
        "linear-gradient": "linear-gradient(90deg, rgba(142,8,241,0.9962578781512605) 0%, rgba(229,138,241,1) 76%)",
        "linear-gradient-hover": "linear-gradient(90deg, rgba(59,5,108,1) 0%, rgba(63,4,105,1) 43%, rgba(177,55,187,1) 87%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'custom-blue': '-1px 4px 5px 0px rgba(0,0,0,0.75)',
        'custom-black-both-side': '0px 1px 5px 0px rgba(0,0,0,0.75)',
      },
    },
  },
  plugins: [],
};
export default config;
