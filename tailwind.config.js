module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-img": "url('/src/utilities/images/banner1.jpg')",
        "background-img": "url('/src/assets/images/appointment.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#111827",
          secondary: "#06283D",
          accent: "#FAA935",
          neutral: "#F47523",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
