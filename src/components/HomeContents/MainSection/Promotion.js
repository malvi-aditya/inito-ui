import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  promotion: {
    marginTop: "4.5em",
    textAlign: "center",
    backgroundColor: "#F2F8FA",
    padding: "3em 20px 2em",

    "& h1": {
      fontWeight: "700",
      fontSize: "25px",
      lineHeight: "30px",
      width: "260px",
      margin: "0 auto",
    },

    "@media (min-width: 1025px)": {
      marginTop: "0",
      bottom: "3.5em",
      paddingBottom: "0",

      "& h1": {
        fontSize: "36px",
        lineHeight: "50px",
        width: "585.14px",
        marginLeft: "auto",
        marginRight: "auto",
      },
    },

    "@media (min-width: 651x)": {
      width: "60%",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "initial",
      paddingTop: "0",
      marginTop: "2em",

      "& h1": {
        fontSize: "4vw",
        lineHeight: "5vw",
        width: "100%",
      },
    },
  },
  underline: {
    boxSizing: "border-box",
    backgroundImage:
      'url("https://cdn.inito.com/inito_website/plain_underline.png")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "contain",

    "@media (min-width: 1025px)": {
      paddingBottom: "0.1em",
      backgroundSize: "2.2em 0.2em",
    },
  },
  description: {
    margin: "1em auto 0",
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "1.5",
    color: "#112D35",
    width: "300px",

    "@media (min-width: 451px)": {
      fontSize: "3vw",
      lineHeight: "4vw",
      width: "80%",
      margin: "1em auto 0",
    },

    "@media (min-width: 651px)": {
      fontSize: "2vw",
      lineHeight: "3vw",
      width: "100%",
    },
    "@media (min-width: 1025px)": {
      fontSize: "15px",
      lineHeight: "25px",
      width: "535px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  different: {
    padding: "0 20px 3em",
    textAlign: "center",
    backgroundColor: "#F2F8FA",

    "& h1": {
      fontWeight: "700",
      fontSize: "17px",
      lineHeight: "30px",
    },

    "@media (min-width: 651px)": {
      width: "60%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "0",
      backgroundColor: "initial",

      "& h1": {
        fontSize: "2.5vw",
        lineHeight: "3.5vw",
        width: "100%",
      },
    },
    "@media (min-width: 1025px)": {
      paddingBottom: "3rem",
      bottom: "1.5em",

      "& h1": {
        fontSize: "24px",
        lineHeight: "50px",
        width: "585.14px",
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
  },
}));

export default function Promotion() {
  const classes = useStyles();
  return (
    <>
      <div class={classes.promotion}>
        <h1>
          The <span class={classes.underline}>only</span> fertility kit you will
          ever need
        </h1>
        <p class={classes.description}>
          Most ovulation tests predict your fertile days by tracking Estrogen
          and Luteinizing Hormone (LH), but fail to measure the hormone that
          actually confirms your ovulation:{" "}
          <strong>PdG (urine metabolite of progesterone).</strong>
        </p>
      </div>
      <div class={classes.different}>
        <h1>What makes Inito different?</h1>
        <p class={classes.description}>
          Inito is the only fertility monitor that measures all{" "}
          <strong>4 hormones</strong> on a <strong>single test strip</strong>,
          showing you a full picture of your cycles with results unique to your
          body.
        </p>
      </div>
    </>
  );
}
