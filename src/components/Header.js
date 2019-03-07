import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";
import Weather from "./Weather";
import { Link } from "react-router-dom";
const styles = theme => {
  return {
    button: {
      margin: theme.spacing.unit
    },
    input: {
      display: "none"
    },
    grow: {
      flexGrow: 1
    }
  };
};

const Header = props => {
  const { classes } = props;

  const name = "Jordan Christley's";
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          <Button color="secondary" href="/" className={classes.button}>
            home
          </Button>
          <Button
            color="secondary"
            href="/dashboard"
            className={classes.button}
          >
            Dashboard
          </Button>
        </Typography>
        <Weather />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
