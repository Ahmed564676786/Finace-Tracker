import React from "react";

// Sample data
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 100 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function PieChartComponent({ width = 600, height = 300 }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(width, height) / 2 - 20;

  let cumulativeAngle = 0; // start at 0 degrees

  // Convert value to SVG path
  const createSlice = (startAngle, endAngle, color) => {
    const startRadians = (Math.PI / 180) * startAngle;
    const endRadians = (Math.PI / 180) * endAngle;

    const x1 = cx + radius * Math.cos(startRadians);
    const y1 = cy + radius * Math.sin(startRadians);
    const x2 = cx + radius * Math.cos(endRadians);
    const y2 = cy + radius * Math.sin(endRadians);

    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    return `
      M ${cx} ${cy}
      L ${x1} ${y1}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
      Z
    `;
  };

  return (
    <svg width={width} height={height} style={{ border: "1px solid #ccc" }}>
      {data.map((slice, index) => {
        const valuePercent = (slice.value / total) * 360;
        const path = createSlice(cumulativeAngle, cumulativeAngle + valuePercent, COLORS[index % COLORS.length]);

        // Label position
        const midAngle = cumulativeAngle + valuePercent / 2;
        const labelX = cx + (radius / 1.5) * Math.cos((midAngle * Math.PI) / 180);
        const labelY = cy + (radius / 1.5) * Math.sin((midAngle * Math.PI) / 180);

        cumulativeAngle += valuePercent;

        return (

             
          <g key={index}>
            <path d={path} fill={COLORS[index % COLORS.length]} stroke="#fff" strokeWidth="2" />
            
            <text
              x={labelX}
              y={labelY}
              fill="#fff"
              fontSize="14"
              textAnchor="middle"
              dominantBaseline="middle"
               
            >
             
              {Math.round((slice.value / total) * 100)}%
            </text>
         
          </g>

          
        );
      })}
    </svg>
  );
}

export default PieChartComponent;