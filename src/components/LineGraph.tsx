import React, { FC } from "react";
import { WeatherData } from "../types";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  LineChart,
} from "recharts";
import "./LineGraph.css";
type LineChartProps = {
  city: string;
  data: WeatherData[] | undefined;
  setSelectedDay: Function;
};
export const LineGraph: FC<LineChartProps> = ({
  city,
  data,
  setSelectedDay,
}) => {
  const handleClick = (selection: any) => {
    const index = selection.activeTooltipIndex;
    setSelectedDay(index);
  };

  return (
    <div className="graph-container">
      <h5>Average High & Low Temperatures for {city}</h5>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          onClick={handleClick}
        >
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="datetime" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="max_temp"
            stroke="#8ac0ec"
            strokeWidth={6}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="min_temp"
            stroke="#6c6c6c"
            strokeWidth={6}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
