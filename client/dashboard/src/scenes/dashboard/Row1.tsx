import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/Dashboard";
import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  BarChart,
  Bar,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
  Area,
} from "recharts";

const Row1 = () => {
  // Access the theme palette from MUI
  const { palette } = useTheme();

  // Fetch KPIs data using a custom hook
  const { data } = useGetKpisQuery();

  // Process revenue data for AreaChart and BarChart
  const revenue = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
        };
      })
    );
  }, [data]);

  // Process revenue and expenses data for AreaChart
  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [data]);

  // Process revenue, expenses, and profit data for LineChart
  const revenueProfit = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          profit: (revenue - expenses).toFixed(2),
        };
      })
    );
  }, [data]);

  return (
    <>
      {/* DashboardBox A: Revenue and Expenses */}
      <DashboardBox gridArea="a">
        {/* BoxHeader for the chart */}
        <BoxHeader
          title="Revenue and Expenses"
          subtitle="Top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
        {/* ResponsiveContainer for the chart */}
        <ResponsiveContainer width="100%" height="100%">
          {/* AreaChart to visualize revenue and expenses */}
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 60,
            }}
          >
            {/* Define gradients for revenue and expenses */}
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            {/* XAxis for the chart */}
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            {/* YAxis for the chart */}
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "10px" }}
              domain={[8000, 23000]}
            />
            {/* Tooltip for the chart */}
            <Tooltip />
            {/* Area representing revenue */}
            <Area
              type="monotone"
              dataKey="revenue"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            {/* Area representing expenses */}
            <Area
              type="monotone"
              dataKey="expenses"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>

      {/* DashboardBox B: Profit and Revenue */}
      <DashboardBox gridArea="b">
        {/* BoxHeader for the chart */}
        <BoxHeader
          title="Profit and Revenue"
          subtitle="Top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
        {/* ResponsiveContainer for the chart */}
        <ResponsiveContainer width="100%" height="100%">
          {/* LineChart to visualize profit and revenue */}
          <LineChart
            width={500}
            height={400}
            data={revenueProfit}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            {/* CartesianGrid for the chart */}
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            {/* XAxis for the chart */}
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            {/* YAxis for the left side */}
            <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            {/* YAxis for the right side */}
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            {/* Tooltip for the chart */}
            <Tooltip />
            {/* Legend for the chart */}
            <Legend
              height={20}
              wrapperStyle={{
                margin: "0 0 10px 0",
              }}
            />
            {/* Line representing profit */}
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="profit"
              stroke={palette.tertiary[500]}
            />
            {/* Line representing revenue */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>

      {/* DashboardBox C: Revenue Month by Month */}
      <DashboardBox gridArea="c">
        {/* BoxHeader for the chart */}
        <BoxHeader
          title="Revenue Month by Month"
          subtitle="Graph representing the revenue month by month"
          sideText="+4%"
        />
        {/* ResponsiveContainer for the chart */}
        <ResponsiveContainer width="100%" height="100%">
          {/* BarChart to visualize revenue month by month */}
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58,
            }}
          >
            {/* Define gradient for revenue */}
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            {/* CartesianGrid for the chart */}
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            {/* XAxis for the chart */}
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            {/* YAxis for the chart */}
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            {/* Tooltip for the chart */}
            <Tooltip />
            {/* Bar representing revenue */}
            <Bar dataKey="revenue" fill="url(#colorRevenue)" />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row1;
