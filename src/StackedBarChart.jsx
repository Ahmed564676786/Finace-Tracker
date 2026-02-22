import React from "react";

// Sample data for 12 months
const data = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 3000, expense: 1398 },
  { name: "Mar", income: 2000, expense: 9800 },
  { name: "Apr", income: 2780, expense: 3908 },
  { name: "May", income: 1890, expense: 4800 },
  { name: "Jun", income: 2390, expense: 3800 },
  { name: "Jul", income: 3490, expense: 4300 },
  { name: "Aug", income: 3000, expense: 2000 },
  { name: "Sep", income: 3200, expense: 2700 },
  { name: "Oct", income: 2100, expense: 1900 },
  { name: "Nov", income: 2500, expense: 3000 },
  { name: "Dec", income: 4000, expense: 3500 },
];

function StackedBarChart() {
  const chartWidth = 950;
  const chartHeight = 300;
  const barWidth = 55;
  const gap = 20;
  const maxTotal = Math.max(...data.map((d) => d.income + d.expense));

  return (
    
    <svg width={chartWidth} height={chartHeight} style={{ border: "1px solid #ccc" }}>
        
      {/* Bars */}
      {data.map((d, i) => {
        const x = i * (barWidth + gap) + 60; // offset for Y-axis
        const incomeHeight = (d.income / maxTotal) * 300;
        const expenseHeight = (d.expense / maxTotal) * 300;
        const yIncome = 350 - incomeHeight;
        const yExpense = yIncome - expenseHeight;

        return (
          <g key={i}>
            {/* Expense */}
            <rect x={x} y={yExpense} width={barWidth} height={expenseHeight} fill="#82ca9d" />
            {/* Income */}
            <rect x={x} y={yIncome} width={barWidth} height={incomeHeight} fill="#8884d8" />
            {/* Month Label */}
            <text x={x + barWidth / 2} y={370} textAnchor="middle" fontSize="12">
              {d.name}
            </text>
          </g>
        );
      })}

      {/* Y-axis lines and labels */}
      {[0, 2000, 4000, 6000, 8000, 10000, 12000].map((val, i) => {
        const y = 350 - (val / maxTotal) * 300;
        return (
          <g key={i}>
            <line x1="50" y1={y} x2={chartWidth} y2={y} stroke="#eee" />
            <text x="10" y={y + 4} fontSize="10">
              {val}
            </text>
          </g>
        );
      })}

      {/* Y-axis */}
      <line x1="50" y1="50" x2="50" y2="350" stroke="#000" />
    </svg>
  );
}

export default StackedBarChart;