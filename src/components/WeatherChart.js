import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip
} from "recharts";
import Weather from "./Weather";
// const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
import sampleForcast from "./sampleForecast";
import { withStyles } from "@material-ui/core/styles";

const data = sampleForcast.consolidated_weather.map(day => {
  const dayOfMonth = new Date(day.applicable_date).getDate();
  return {
    date: dayOfMonth,
    average: day.the_temp,
    low: day.min_temp,
    high: day.max_temp
  };
});
//make a line for temp
const WeatherChart = props => {
  const { classes } = props;
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <Legend verticalAlign="top" height={36} />
      <Line
        type="monotone"
        dataKey="average"
        stroke="#8884d8"
        label="Average"
      />
      <Line type="monotone" dataKey="high" stroke="#870900" label="High" />
      <Line type="monotone" dataKey="low" stroke="#2384d8" label="Low" />
      <CartesianGrid stroke="#ccc" />
      <Tooltip />
      <XAxis dataKey="date" label={`Date of the month`} />
      <YAxis layout="vertical" label="C°" />
    </LineChart>
  );
};

export default WeatherChart;
