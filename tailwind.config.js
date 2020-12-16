module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        color1: "#a1a1a1",
        color2: "#000000",
        color3: "#ffffff",
        color4: "#454545",
      },
      letterSpacing: {
        lspace: ".8em",
      },
      spacing: {
        height: "25rem",
      },
      backgroundImage: {
        bg1: "url('./images/mobile-image-hero-1.jpg')",
        bg2: "url('./images/mobile-image-hero-2.jpg')",
        bg3: "url('./images/mobile-image-hero-3.jpg')",
      },
      zIndex: {
        1000: "1000",
      },
    },
  },
  variants: {},
  plugins: [],
};
