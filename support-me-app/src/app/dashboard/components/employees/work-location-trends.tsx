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
        className="[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800"
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
        <Tooltip
          wrapperClassName="dark:!bg-black rounded-md dark:!border-border !text-sm"
          separator=": "
          labelClassName="font-bold"
          formatter={(value, name) => {
            if (name === "wfh") {
              return [value, "Work from home"];
            }
            if (name === "office") {
              return [value, "Work from office"];
            }
          }}
        />
        <Legend
          iconType="circle"
          formatter={(value) => {
            if (value === "office") {
              return <span className="text-sm">Work from office</span>;
            }
            if (value === "wfh") {
              return <span className="text-sm">Work from home</span>;
            }
          }}
        />
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
