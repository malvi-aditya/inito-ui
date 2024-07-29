import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppLogo from "./AppLogo";
import Button from "./../Button";
import MenuLogo from "./MenuLogo";

const useStyles = makeStyles(() => ({
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 101,
    backgroundColor: "white",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1024px",
    height: "80px",
    margin: "0px auto 0px auto",
    "@media (max-width: 1024px)": {
      margin: "0px 4rem 0px 4rem",
    },

    "@media (max-width: 650px)": {
      height: "60px",
      margin: "0",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      boxShadow: "0 1px 0 0 #DBDBDB",
    },
  },
  navigation: {
    display: "flex",
    "@media (max-width: 650px)": {
      marginLeft: "auto",
      marginRight: "20px",
    },
  },
  anchor: {
    fontSize: "16px",
    fontWeight: "600",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "50px",
    "&:first-child": {
      marginLeft: "0px",
    },
    "@media (max-width: 768px)": {
      marginLeft: "25px",
    },
    "@media (max-width: 650px)": {
      display: "none",
      "&:last-child": {
        display: "flex",
      },
    },
    color: "#112D35",
    "&:hover": {
      textDecoration: "none",
      color: "#1F94AA",
    },
  },
  button: {
    marginTop: "auto",
    marginBottom: "auto",
    height: "40px",
    width: "130px",
    borderRadius: "26px",
    backgroundColor: "#1f94aa",
    fontSize: "14px",
    lineHeight: "17px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    "@media (max-width: 650px)": {
      height: "30px",
    },
  },
  menu: {
    display: "none",
    width: "65px",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 650px)": {
      display: "flex",
    },
  },
}));

export default function NavigationBar(props) {
  const classes = useStyles();

  return (
    <div class={classes.header}>
      <div class={classes.headerContainer}>
        <div class={classes.menu}>
          <MenuLogo />
        </div>
        <div class={classes.logo}>
          <AppLogo classes={classes} />
        </div>
        <div class={classes.navigation}>
          <a class={classes.anchor} href="/about-us">
            About Us
          </a>
          <a class={classes.anchor} href="https://blog.inito.com">
            Blog
          </a>
          <a class={classes.anchor} href="/faqs">
            FAQ
          </a>
          <a class={classes.anchor} href="/contact-us">
            Contact Us
          </a>
          <a class={classes.anchor} href="/careers">
            Careers
          </a>
          <a class={classes.anchor} href="/buy-now">
            <Button text={"Try Inito"} classes={classes} />
          </a>
        </div>
      </div>
    </div>
  );
}
