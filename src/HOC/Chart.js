import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({ data }) => {
  return (
    <BarChart width={700} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="đơn hàng" fill="#8884d8" />
      <Bar dataKey="doanh thu" fill="#82ca9d" />
    </BarChart>
  );
};

export default Chart;
