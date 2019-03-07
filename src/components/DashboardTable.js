import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import LinearProgress from "@material-ui/core/LinearProgress";
import fetchDroneData from "../store/api/fetchDroneData";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class DashboardTable extends React.Component {
  componentWillMount = () => {
    this.props.fetchDroneData();
    // window.setInterval(this.props.fetchDroneData, 3000);
  };
  render = () => {
    const { classes, droneData } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Temperature</TableCell>
              <TableCell align="right">Latitude</TableCell>
              <TableCell align="right">Longitude</TableCell>
              <TableCell align="right">Seconds Elapsed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {droneData.measurements.map((m, idx) => {
              debugger;
              return (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">
                    {m.metric}
                  </TableCell>
                  <TableCell align="right">{m.latitude}</TableCell>
                  <TableCell align="right">{m.longitude}</TableCell>
                  <TableCell align="right">{m.timestamp}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  };
}

DashboardTable.propTypes = {
  classes: PropTypes.object.isRequired
};

const MapState = state => {
  return { droneData: state.droneData };
};

const MapDispatch = dispatch => {
  return {
    fetchDroneData: () => {
      dispatch({ type: actions.FETCH_DRONE_DATA });
    }
  };
};

export default withStyles(styles)(
  connect(
    MapState,
    MapDispatch
  )(DashboardTable)
);
