import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";


const Chart = ({ data }) => {
  return (
    <div className="chart-container">
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Chart;