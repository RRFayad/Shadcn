"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { DUMMY_DATA } from "@/lib/data";

function WorkLocationTrends() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        width={500}
        height={300}
        data={DUMMY_DATA}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip />
        <Legend />
        <Bar dataKey="office" stackId="a" fill="#ec4899" />
        <Bar
          dataKey="wfh"
          stackId={"a" /* stackId must match to be stacked */}
          fill="#6b7280"
          radius={[4, 4, 0, 0] /*The border radius of the stack*/}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default WorkLocationTrends;
