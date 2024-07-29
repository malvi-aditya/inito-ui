import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavigationBar from './NavigationBar/NavigationBar';
import MainSection from './MainSection/MainSection';
import News from './MainSection/News';
import Promotion from './MainSection/Promotion';

const useStyles = makeStyles(() => ({
  root: {},
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavigationBar />
      <MainSection />
      <News />
      <Promotion />
    </div>
  );
}
