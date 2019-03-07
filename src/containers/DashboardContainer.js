import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DashboardTable from "../components/DashboardTable";
import DroneMap from "../components/DroneMap";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import LinearProgress from "@material-ui/core/LinearProgress";
import fetchDroneData from "../store/api/fetchDroneData";

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

class DashboardContainer extends React.Component {
  componentWillMount = () => {
    this.props.fetchDroneData();
    window.setInterval(this.props.fetchDroneData, 3000);
  };
  render = () => {
    const { classes, droneData } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={11}>
            <DroneMap />
          </Grid>
          <Grid item xs />
          <Grid item xs={11} sm={11}>
            <DashboardTable droneData={droneData} />
          </Grid>
          <Grid item xs />
        </Grid>
      </div>
    );
  };
}

DashboardContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

const MapState = state => {
  return { droneData: state.droneData };
};

const MapDispatch = dispatch => {
  return {
    fetchDroneData: () => {
      console.log("fetching");
      dispatch({ type: actions.FETCH_DRONE_DATA });
    }
  };
};

export default withStyles(styles)(
  connect(
    MapState,
    MapDispatch
  )(DashboardContainer)
);
