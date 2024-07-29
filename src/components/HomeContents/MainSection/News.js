import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "1024px",
    margin: "0 auto",
  },
  pressSection: {
    margin: "0 0 15%",
    paddingTop: "2em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "@media (min-width: 651px)": {
      paddingTop: "0",
      marginBottom: "0",
      top: "-2em",
    },
    "@media (min-width: 769px)": {
      top: "-2.5em",
    },
    "@media (min-width: 1025px)": {
      marginBottom: "7rem",
      top: "-3em",
    },
  },

  pressSectionContainer: {
    marginTop: "1em",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridRowGap: "15%",
    gridColumnGap: "10%",

    "@media (min-width: 651px)": {
      gridTemplateColumns: "repeat(5, 1fr)",
      gridColumnGap: "4%",
    },
    "@media (min-width: 1025px)": {
      display: "flex",
      justifyContent: "space-evenly",
      width: "1024px",
    },
  },
  text: {
    fontWeight: "700",
    fontSize: "10px",
    lineHeight: "10px",
    color: "#C4C4C4",

    "@media (min-width: 651px)": {
      fontSize: "17px",
      lineHeight: "32px",
    },
  },
  pressSectionImg: {
    alignSelf: "center",
    justifySelf: "center",
    height: "-moz-fit-content",
    height: "fit-content",
  },
  pressLogo: {
    width: "auto",
    maxWidth: "100%",
  },
}));

export default function News() {
  const classes = useStyles();

  return (
    <div class={classes.root}>
      <div class={classes.pressSection}>
        <span class={classes.text}>AS SEEN ON</span>
        <div class={classes.pressSectionContainer}>
          <div class={classes.pressSectionImg}>
            <img
              class={classes.pressLogo}
              srcset="https://cdn.inito.com/inito_website/press/Logo_Bloomberg@2x.png 2x"
              src="https://cdn.inito.com/inito_website/press/Logo_Bloomberg@1x.png"
            />
          </div>
          <div class={classes.pressSectionImg}>
            <img
              class={classes.pressLogo}
              srcset="https://cdn.inito.com/inito_website/press/Logo_Forbes_India@2x.png 2x"
              src="https://cdn.inito.com/inito_website/press/Logo_Forbes_India@1x.png"
            />
          </div>
          <div class={classes.pressSectionImg}>
            <img
              class={classes.pressLogo}
              srcset="https://cdn.inito.com/inito_website/press/Logo_The_Week@2x.png 2x"
              src="https://cdn.inito.com/inito_website/press/Logo_The_Week@1x.png"
            />
          </div>
          <div class={classes.pressSectionImg}>
            <img
              class={classes.pressLogo}
              srcset="https://cdn.inito.com/inito_website/press/Logo_Washington@2x.png 2x"
              src="https://cdn.inito.com/inito_website/press/Logo_Washington@1x.png"
            />
          </div>
          <div class={classes.pressSectionImg}>
            <img
              class={classes.pressLogo}
              srcset="https://cdn.inito.com/inito_website/press/Logo_Enterpreneur@2x.png 2x"
              src="https://cdn.inito.com/inito_website/press/Logo_Enterpreneur@1x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
