import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
  render = () => {
    const { classes, droneData } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Metric</TableCell>
              <TableCell align="right">Latitude</TableCell>
              <TableCell align="right">Longitude</TableCell>
              <TableCell align="right">Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {droneData.measurements.map((m, idx) => {
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

export default withStyles(styles)(DashboardTable);
