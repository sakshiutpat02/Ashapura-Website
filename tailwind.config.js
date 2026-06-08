export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F15A00",
        secondary: "#F68B1F",
        amber: "#F8AE26",
        success: "#4CAF50",
        cream: "#FFF9F3",
        ink: "#1F1F1F",
        body: "#4A4A4A",
        surface: "#FFFFFF",
        soft: "#F7F3F0",
        line: "#E9DDD6",
        inverse: "#242120"
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 12px 34px rgba(31, 31, 31, 0.08)",
        hover: "0 18px 45px rgba(241, 90, 0, 0.14)",
        nav: "0 8px 24px rgba(31, 31, 31, 0.07)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 34s linear infinite"
      }
    }
  },
  plugins: []
};
