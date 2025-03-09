"use client"

import type * as React from "react"

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: Record<string, { label: string; color: string }>
  children: React.ReactNode
}

export function ChartContainer({ config, children, className, ...props }: ChartContainerProps) {
  return (
    <div className={className} {...props}>
      <div className="h-full w-full">{children}</div>
      <div className="mt-4 flex items-center gap-4">
        {Object.entries(config).map(([key, { label, color }]) => (
          <div key={key} className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
            <span className="text-sm text-gray-500">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

