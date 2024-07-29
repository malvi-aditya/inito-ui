import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./../Button";

const useStyles = makeStyles(() => ({
  main: {
    paddingTop: "35px",
    margin: "0",

    "& img": {
      width: "auto",
      maxWidth: "100%",
    },

    "& div": {
      position: "relative",
    },

    "@media (min-width: 1025px)": {
      minHeight: "850px",
      backgroundPositionY: "-5%",

      "& h1": {
        fontSize: "35px",
        lineHeight: "40px",
        maxWidth: "initial",
      },
    },
    "@media (min-width: 651px)": {
      minHeight: "78vw",
      backgroundImage:
        'url("https://cdn.inito.com/inito_website/v2_main_hero_background.png")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    "@media (min-width: 769px)": {
      minHeight: "73vw",
      backgroundPositionY: "2vw",
    },
    "@media (min-width: 865px)": {
      backgroundPositionY: "0",
      minHeight: "72vw",

      "& h1": {
        width: "100%",
        fontSize: "28px",
      },
    },
    "@media (min-width: 900px)": {
      backgroundPositionY: "1vw",
      minHeight: "68vw",
    },
    "@media (min-width: 960px)": {
      backgroundPositionY: "-2em",
      minHeight: "62vw",
    },

    "@media (min-width: 1220px)": {
      "& img": {
        left: "23em",
      },
    },
  },
  mainContainer: {
    maxWidth: "1024px",
    width: "100%",
    margin: "0 auto",
    position: "relative",
    backgroundColor: "#C4F2FF",
    paddingTop: "2.8em",
    overflow: "hidden",

    "@media (min-width: 651px)": {
      overflow: "visible",
      height: "100%",
      top: "0",
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
      background: "none",
      paddingTop: "2em",

      "& h1": {
        margin: "0.5em",
        marginLeft: "0",
        fontSize: "3.5vw",
        lineHeight: "3.5vw",
        width: "82%",
      },
    },

    "@media (min-width: 1025px)": {
      paddingTop: "3em",
    },
  },
  tagLine: {
    display: "inline-block",

    "& h1": {
      fontWeight: "700",
      fontSize: "25px",
      lineHeight: "30px",
      margin: "0px 25px 0.2em 38px",
      maxWidth: "268px",
    },

    "@media (min-width: 375px)": {
      "& h1": { fontSize: "30px", lineHeight: "35px", maxWidth: "320px" },
    },

    "@media (min-width: 651px)": {
      width: "55%",
      marginTop: "4em",
      marginLeft: "2.5rem",
      marginRight: "0",
      minWidth: "320px",

      "& h1": {
        margin: "0.5em",
        marginLeft: "0",
        fontSize: "3.5vw",
        lineHeight: "3.5vw",
        width: "82%",
      },

      "& h6": {
        margin: "auto",
        top: "0",
        fontSize: "2vw",
        lineHeight: "3vw",
      },
    },

    "@media (min-width: 769px)": {
      marginLeft: "4rem",
    },

    "@media (min-width: 865px)": {
      marginTop: "4.2rem",
      marginLeft: "6rem",
    },

    "@media (min-width: 1025px)": {
      marginLeft: "0",
      marginTop: "8em",
      minWidth: "400px",

      "& h1": {
        fontSize: "35px",
        maxWidth: "initial",
        lineHeight: "40px",
      },

      "& h6": {
        fontSize: "16px",
        lineHeight: "26px",
      },
    },

    "@media (min-width: 1220px)": {
      "& h1": {
        fontSize: "48px",
        lineHeight: "58px",
        marginRight: "0",
        width: "496px",
      },
    },
  },
  stars: {
    margin: "0 25px 5px 38px",
    "@media (min-width: 651px)": {
      marginLeft: "0",
      marginRight: "0",
      alignItems: "center",
      marginRight: "0",
      display: "flex",
    },
  },
  starImage: {
    width: "10px",
    height: "10px",

    "@media (min-width: 651px)": {
      width: "15px",
      height: "15px",
      marginRight: "7px",
    },
  },
  text: {
    fontWeight: "600",
    fontSize: "8px",
    lineHeight: "15px",
    letterSpacing: "0.15em",
    paddingLeft: "0.5em",
    color: "black",

    "@media (min-width: 350px)": {
      fontSize: "10px",
    },

    "@media (min-width: 1025px)": {
      fontSize: "13px",
    },
  },
  fontBold: {
    fontWeight: "700",
  },
  mainButton: {
    textAlign: "center",
    width: "100%",
    top: "-1.2em",

    "@media (min-width: 651px)": {
      display: "block",
      marginLeft: "0",
      top: "1.5em",
    },
    "@media (max-width: 651px)": {
      display: 'none',
    }
  },
  mainButton2: {
    display: 'none',

    "@media (max-width: 651px)": {
      display: "block",
      marginLeft: "0",
      top: "-1.2em",
    },
  },
  phoneImage: {
    display: "contents",
    "@media (min-width: 651px)": {
      height: "fit-content",

      "& img": {
        maxWidth: "60%",
        left: "15.5em",
        position: "absolute",
        top: "2em",
      },
    },

    "@media (min-width: 1025px)": {
      "& img": {
        maxWidth: "750px",
        width: "750px",
        left: "16em",
        top: "-1em",
      },
    },

    "@media (min-width: 1220px)": {
      "& img": {
        left: "23em",
      },
    },
  },
  largeView: {
    display: "none",
    "@media (min-width: 651px)": {
      display: "initial",
    },
  },
  button: {
    "@media (min-width: 1025px)": {
      width: "248px",
      height: "50px",
      fontSize: "16px",
    },
    "@media (min-width: 651px)": {
      width: "200px",
      marginLeft: "0",
      fontWeight: "600",
      fontSize: "13px",
      lineHeight: "19.5px",
      letterSpacing: "0.5px",
      height: "40px",
    },
    "@media (min-width: 351px)": {
      width: "260px",
      fontSize: "12px",
      lineHeight: "15px",
      margin: 'auto',
    },
  },
  smallView: {
    "@media (min-width: 651px)": {
      display: "none",
    },
  },
}));

export default function MainSection() {
  const classes = useStyles();
  return (
    <div class={classes.main}>
      <div class={classes.mainContainer}>
        <div class={classes.tagLine}>
          <div class={classes.stars}>
            <img
              class={classes.starImage}
              src="https://cdn.inito.com/inito_website/star.png"
            />
            <img
              class={classes.starImage}
              src="https://cdn.inito.com/inito_website/star.png"
            />
            <img
              class={classes.starImage}
              src="https://cdn.inito.com/inito_website/star.png"
            />
            <img
              class={classes.starImage}
              src="https://cdn.inito.com/inito_website/star.png"
            />
            <img
              class={classes.starImage}
              src="https://cdn.inito.com/inito_website/star.png"
            />
            <span class={classes.text}>TRUSTED BY 20,000+ COUPLES</span>
          </div>
          <h1 class={classes.fontBold}>
            Track your fertility hormones at home, in 10 minutes
          </h1>
          <h6>
            Get accurate results of{" "}
            <strong>
              Estrogen, LH, PdG (urine metabolite of progesterone) and FSH
            </strong>{" "}
            with Inito, the all-in-one fertility monitor.
          </h6>
          <div class={classes.mainButton}>
            <a href="#only-fertility-kit">
              <Button text={"How does Inito work?"} classes={classes} />
            </a>
          </div>
        </div>
        <div class={classes.phoneImage}>
          <img
            class={classes.smallView}
            src="https://cdn.inito.com/inito_website/v2_main_hero_mobile.png"
          />
          <img
            class={classes.largeView}
            src="https://cdn.inito.com/inito_website/v2_main_hero_desktop.png"
          />
        </div>
      </div>
      <div class={classes.mainButton2}>
            <a href="#only-fertility-kit">
              <Button text={"How does Inito work?"} classes={classes} />
            </a>
          </div>
    </div>
  );
}
