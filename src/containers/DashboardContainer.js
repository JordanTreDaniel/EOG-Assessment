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
import WeatherChart from "../components/WeatherChart";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "5vh"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  chart: {
    marginTop: "auto"
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
        <Grid container spacing={16}>
          <Grid item xs={1} />
          <Grid item xs={10} sm={5}>
            <DroneMap droneData={droneData} />
          </Grid>
          <Grid item xs={10} sm={5}>
            <WeatherChart className={classes.chart} />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={1} />
          <Grid item xs={10} sm={10}>
            <DashboardTable droneData={droneData} />
          </Grid>
          <Grid item xs={1} />
        </Grid>
        <Grid className={classes.root} />
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
      dispatch({ type: actions.FETCH_DRONE_DATA });
    },
    fetchWeather: (lng, lat) =>
      dispatch({
        type: actions.FETCH_WEATHER,
        longitude: lng,
        latitude: lat
      })
  };
};

export default withStyles(styles)(
  connect(
    MapState,
    MapDispatch
  )(DashboardContainer)
);
