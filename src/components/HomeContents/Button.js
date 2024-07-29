import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: '26px',
    backgroundColor: '#1F94AA',
    color: '#FFFFFF',
    fontSize: '15px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    lineHeight: '19px',
    textAlign: 'center',
    border: 'none',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

export default function Button(props) {
  const classes = useStyles(props);
  const { text } = props;
  return (
    <div class={classes.button}>
      {text}
    </div>
  )
}