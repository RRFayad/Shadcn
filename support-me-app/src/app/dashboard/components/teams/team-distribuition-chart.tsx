"use client";
import { dataPie } from "@/lib/data-pie";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

function TeamsDistributionChart() {
  return (
    <>
      <ResponsiveContainer width={"100%"} height={150}>
        <PieChart>
          <Tooltip
            wrapperClassName=" dark:[&_.recharts-tooltip-item]:!text-white dark:!bg-black rounded-md dark:!border-border !text-sm "
            labelClassName="font-bold "
          />
          <Pie data={dataPie} dataKey={"value"} nameKey={"name"}>
            {dataPie.map((dataItem, index) => (
              <Cell fill={dataItem.color} key={index} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

export default TeamsDistributionChart;
