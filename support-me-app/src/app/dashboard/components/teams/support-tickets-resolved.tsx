"use client";
import { SUPPORT_TICKETS_DATA } from "@/lib/support-tickets-data";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function SupportTicketsResolved() {
  const data = SUPPORT_TICKETS_DATA;
  return (
    <ResponsiveContainer height={350} width="100%">
      <LineChart data={data}>
        <Tooltip
          wrapperClassName="  dark:!bg-black rounded-md dark:!border-border !text-sm "
          labelClassName="font-bold "
        />
        <XAxis fontSize={12} dataKey={"name"} stroke="#888888" />
        <YAxis fontSize={12} stroke="#888888" />
        <CartesianGrid strokeDasharray="3" />
        {/*Dash size and space between as a 2nd value*/}
        <Line type="monotone" stroke="#84cc16" dataKey={"delta"} />
        {/*Monotone - curved shape*/}
        <Line dataKey={"alpha"} type="monotone" stroke="#3b82f6" />
        <Line dataKey={"canary"} type="monotone" stroke="#f97316" />
        <Legend
          formatter={(value) => (
            <span className="text-sm capitalize">{value}</span>
          )}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SupportTicketsResolved;
