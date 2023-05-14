/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "hsl(233, 26%, 24%)",
        "primary-2": "hsl(136, 65%, 51%)",
        "primary-3": "hsl(192, 70%, 51%)",
        "neutral-1": "hsl(233, 8%, 62%)",
        "neutral-2": "hsl(220, 16%, 96%)",
        "neutral-3": "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        "intro-desktop": "url('/src/images/bg-intro-desktop.svg')",
        "intro-mobile": "url('/src/images/bg-intro-mobile.svg')",
      },
      backgroundPosition: {
        "intro-position-desktop-md": "300px 70%",
        "intro-position-desktop-lg": "700px 70%",
        "intro-position-mobile": "100% 0%",
      },
    },
  },
  plugins: [],
};
