import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DashboardTable from "../components/DashboardTable";
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function DashboardContainer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs />
        <Grid item xs={12} sm={9}>
          <DashboardTable />
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
}

DashboardContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DashboardContainer);
