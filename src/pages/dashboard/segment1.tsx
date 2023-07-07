import React, { useMemo } from "react";
import DashBox from "@/components/utils/dashBox";
import { useGetKpisQuery } from "@/state/api";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { useTheme } from "@mui/material";
import DashHeader from "@/components/utils/dashHeader";

type Props = NonNullable<unknown>;

const Segment1 = (props: Props) => {
  const { data } = useGetKpisQuery();
  const { palette } = useTheme();
  console.log(useGetKpisQuery());
  console.log(import.meta.env.SERVER_BASE_URL);

  const revenueVsExpenses = useMemo(() => {
    if (!data) return [];
    console.log(data[0].monthlyData);
    return data[0].monthlyData.map(({ month, revenue, expenses }) => ({
      name: month.slice(0, 3),
      revenue: revenue,
      expenses: expenses,
    }));
  }, [data]);

  const revenueAndProfit = useMemo(() => {
    if (!data) return [];
    console.log(data[0].monthlyData);
    return data[0].monthlyData.map(({ month, revenue, expenses }) => ({
      name: month.slice(0, 3),
      revenue: revenue,
      expenses: expenses,
      profit: revenue - expenses,
    }));
  }, [data]);

  return (
    <>
      <DashBox gridArea="a">
        <DashHeader
          title="Revenue vs Expenses"
          subtitle="This year so far; Top line represents revenue, bottom line represents expenses"
          sideText="Yearly"
        />
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart
            width={730}
            height={250}
            data={revenueVsExpenses || []}
            margin={{
              top: 15,
              right: 25,
              bottom: 20,
              left: -10,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
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

              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
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
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
              interval={0}
            />
            <YAxis
              tickLine={false}
              style={{ fontSize: "10px" }}
              axisLine={false}
              domain={[7000, 24000]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />

            <Area
              type="monotone"
              dataKey="expenses"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </DashBox>

      <DashBox gridArea="b">
        <DashHeader
          title="Profit and Revenue"
          subtitle="This year so far; Left line profit, right line represents revenue"
          sideText="Yearly"
        />
        <ResponsiveContainer width="100%" height="80%">
          <LineChart
            // width={730}
            // height={250}
            data={revenueAndProfit || []}
            margin={{
              top: 15,
              right: 25,
              bottom: 20,
              left: -10,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />

            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
              interval={0}
            />
            <YAxis
              yAxisId="left"
              tickLine={false}
              style={{ fontSize: "10px" }}
              axisLine={false}
            />
            <YAxis
              yAxisId="right"
              orientation={"right"}
              tickLine={false}
              style={{ fontSize: "10px" }}
              axisLine={false}
            />
            <Tooltip />
            <Legend height={20} wrapperStyle={{ margin: "0 0 10px 0" }} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="profit"
              // dot={true}
              stroke={palette.tertiary[300]}
              // fillOpacity={1}
              // fill="url(#colorRevenue)"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              // dot={true}
              stroke={palette.primary.main}
              // fillOpacity={1}
              // fill="url(#colorRevenue)"
            />
          </LineChart>
        </ResponsiveContainer>
      </DashBox>

      <DashBox gridArea="c">
        <DashHeader
          title="Revenue by Month"
          subtitle="This year so far; Bar chart shows revenue by month"
          sideText="Yearly"
        />
        <ResponsiveContainer width="100%" height="80%">
          <BarChart
            width={730}
            height={250}
            margin={{
              top: 15,
              right: 25,
              bottom: 20,
              left: -10,
            }}
            data={revenueAndProfit}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <defs>
              <linearGradient id="colorRevenueOnly" x1="0" y1="0" x2="0" y2="1">
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
            <XAxis
              dataKey="name"
              tickLine={false}
              interval={0}
              style={{ fontSize: "10px" }}
            />
            <YAxis tickLine={false} style={{ fontSize: "10px" }} />
            <Tooltip />
            <Legend />
            <Bar
              type="monotone"
              dataKey="revenue"
              // stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenueOnly)"
            />
          </BarChart>
        </ResponsiveContainer>
      </DashBox>
    </>
  );
};

export default Segment1;
