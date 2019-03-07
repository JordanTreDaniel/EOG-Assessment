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

const measurements = [
  {
    timestamp: 1551920496000,
    metric: 316.9665585828055,
    latitude: 31.061953284449004,
    longitude: -90.53714884381598,
    uom: "temperature - fahrenheit",
    accuracy: 68.93078014944133
  },
  {
    timestamp: 1551920500000,
    metric: 317.11771102923944,
    latitude: 30.989372920800786,
    longitude: -90.51825478801175,
    uom: "temperature - fahrenheit",
    accuracy: 14.10307018041325
  },
  {
    timestamp: 1551920504000,
    metric: 317.26013715431225,
    latitude: 30.916517322081106,
    longitude: -90.50045152237765,
    uom: "temperature - fahrenheit",
    accuracy: 62.32569829667779
  },
  {
    timestamp: 1551920508000,
    metric: 317.39380491274653,
    latitude: 30.843402880492317,
    longitude: -90.48374305257336,
    uom: "temperature - fahrenheit",
    accuracy: 39.08694828342827
  }
];

function DashboardTable(props) {
  const { classes } = props;

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
          {measurements.map((m, idx) => {
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
}

DashboardTable.propTypes = {
  classes: PropTypes.object.isRequired
};

const MapState = state => {
  return { data: state.droneData };
};

const MapDispatch = dispatch => {
  return { fetchDroneData: () => dispatch({ type: actions.FETCH_DRONE_DATA }) };
};

export default withStyles(styles)(
  connect(
    MapState,
    MapDispatch
  )(DashboardTable)
);
