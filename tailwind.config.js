module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./UI/**/*.{js,ts,jsx,tsx}"],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        2: "2rem",
        3: "3rem",
        4: "4rem",
        5: "5rem",
        6: "6rem",
        7: "7rem",
        8: "8rem",
        9: "9rem",
        10: "10rem",
        20: "20rem",
        30: "30rem",
      },
      margin: {
        2: "2rem",
        3: "3rem",
        4: "4rem",
        5: "5rem",
        6: "6rem",
        7: "7rem",
        8: "8rem",
        9: "9rem",
        10: "10rem",
        20: "20rem",
        30: "30rem",
      },
      width: {
        1: "1rem",
        2: "2rem",
        3: "3rem",
        4: "4rem",
        5: "5rem",
        6: "6rem",
        7: "7rem",
        8: "8rem",
        9: "9rem",
        10: "10rem",
        15: "15rem",
        20: "20rem",
        25: "25rem",
        30: "30rem",
        40: "40rem",
        50: "50rem",
        60: "60rem",
        70: "70rem",
        80: "80rem",
        90: "90rem",
        100: "100rem",
        110: "110rem",
        120: "120rem",
        130: "130rem",
        140: "140rem",
        150: "150rem",
      },
      height: {
        1: "1rem",
        2: "2rem",
        3: "3rem",
        4: "4rem",
        5: "5rem",
        6: "6rem",
        7: "7rem",
        8: "8rem",
        9: "9rem",
        10: "10rem",
        15: "15rem",
        20: "20rem",
        30: "30rem",
        40: "40rem",
        50: "50rem",
        60: "60rem",
        70: "70rem",
        80: "80rem",
        90: "90rem",
        100: "100rem",
      },
      margin: {
        30: "30rem",
      },
      spacing: {
        0.3: "0.3rem",
        0.5: "0.5rem",
        0.8: "0.8rem",
        1: "1rem",
        1.3: "1.3rem",
        1.5: "1.5rem",
        1.8: "1.8rem",
        2: "2rem",
        30: "30rem",
        40: "40rem",
        50: "50rem",
      },
      fontSize: {
        textSize__03: "0.3rem",
        textSize__05: "0.5rem",
        textSize__08: "0.8rem",
        textSize__1: "1rem",
        textSize__2: "2rem",
        textSize__2_5: "2.5rem",
        textSize__3: "3rem",
        textSize__4: "4rem",
        textSize__5: "5rem",
        textSize__6: "6rem",
        textSize__7: "7rem",
        textSize__8: "8rem",
        textSize__9: "9rem",
        textSize__10: "10rem",
        textSize__Labels: ["2.5rem", "0rem"],
        textSize__headers: ["8rem", "0rem"],
        textSize__placeholder: ["5rem", "0rem"],
        textSize__SubHeaders: ["5rem", "0rem"],
        textSize__options: ["4rem", "0rem"],
      },
      textColor: {
        DarkMode__buttonText: "#F0F6FF",
        DarkMode__text: "#FFFFFF",
        DarkMode__textFaded: "#E2E3E3", // opacity 50%
        LightMode__buttonText: "#2A2A47",
        LightMode__text: "#1B1D28",
        LightMode__textFaded: "#1B1D28", // opacity 50%
        lightGray: "#F1EFEE",
        primary: "#FAFAFA",
        secColor: "#efefef",
        navColor: "#BEBEBE",
      },
      backgroundColor: {
        DarkMode__primaryBase: "#1b1d28",
        DarkMode__secondaryBase: "#2A2A47",
        DarkMode__buttonBase: "#1F13C",
        DarKMode__buttonHover: "#4744C5",
        LightMode__primaryBase: "#DDE4E4",
        LightMode__secondaryBase: "#F0F6FF",
        LightMode__buttonBase: "#4744C5",
        LightMode__buttonHover: "E0D6FF",
        mainColor: "#FBF8F9",
        secondaryColor: "#F0F0F0",
        blackOverlay: "rgba(0, 0 ,0 ,0.7)",
      },
      border: {
        DarkMode__border: "#F0F6FF",
        LightMode__border: "#4744C5",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(-200px)",
            transform: "translateX(-200px)",
          },
          "100%": {
            "-webkit-transform": "translateX(0px)",
            transform: "translateX(0px)",
          },
        },

        "slide-fwd": {
          "0%": {
            "-webkit-transform": "translateZ(0px)",
            transform: "translateZ(0px)",
          },
          "100%": {
            "-webkit-transform": "translateZ(160px)",
            transform: "translateZ(160px)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        "slide-fwd":
          " slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      transitionProperty: {
        height: "height",
      },
    },
    cursor: {
      "zoom-in": "zoom-in",
      pointer: "pointer",
    },
  },
  variants: {
    // backgroundColor: ['active'],
    extend: {},
  },
  plugins: [],
};
