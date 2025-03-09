"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ChartContainer } from "@/app/components/ui/chart"

const data1 = [
  { date: "2023-08", value1: 25, value2: 20 },
  { date: "2023-10", value1: 45, value2: 35 },
  { date: "2023-12", value1: 75, value2: 65 },
  { date: "2024-02", value1: 100, value2: 85 },
  { date: "2024-04", value1: 125, value2: 115 },
  { date: "2024-06", value1: 150, value2: 140 },
]

const data2 = [
  { date: "2024-01", value1: 0, value2: -5 },
  { date: "2024-03", value1: 5, value2: 0 },
  { date: "2024-05", value1: 15, value2: 10 },
  { date: "2024-07", value1: 25, value2: 20 },
  { date: "2024-09", value1: 35, value2: 30 },
  { date: "2024-11", value1: 40, value2: 35 },
]

const data3 = [
  { date: "2023-09", value1: 10, value2: 5 },
  { date: "2023-11", value1: 30, value2: 20 },
  { date: "2024-01", value1: 50, value2: 40 },
  { date: "2024-03", value1: 80, value2: 65 },
  { date: "2024-05", value1: 110, value2: 95 },
  { date: "2024-07", value1: 130, value2: 120 },
]

export function PerformanceChart({ dataset = 1 }: { dataset?: number }) {
  let data
  switch (dataset) {
    case 1:
      data = data1
      break
    case 2:
      data = data2
      break
    case 3:
      data = data3
      break
    default:
      data = data1
  }

  return (
    <ChartContainer
      config={{
        dotaktu: {
          label: "Rôst Dôtaktu",
          color: "hsl(221, 83%, 53%)",
        },
        majetku: {
          label: "Rôst majetku",
          color: "hsl(45, 93%, 47%)",
        },
      }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="date"
            tickFormatter={(value) => {
              const date = new Date(value)
              return date.toLocaleDateString("sk-SK", { month: "short" })
            }}
            stroke="#94a3b8"
          />
          <YAxis tickFormatter={(value) => `${value}%`} stroke="#94a3b8" />
          <Tooltip
            formatter={(value) => [`${value}%`, ""]}
            labelFormatter={(label) => {
              const date = new Date(label)
              return date.toLocaleDateString("sk-SK", { year: "numeric", month: "long" })
            }}
          />
          <Line
            type="monotone"
            dataKey="value1"
            stroke="hsl(221, 83%, 53%)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="value2"
            stroke="hsl(45, 93%, 47%)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

