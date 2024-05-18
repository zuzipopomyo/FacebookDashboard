/* eslint-disable react/prop-types */

import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 5, label: "India", color: "#286BD6" },
  { value: 10, label: "United State", color: "#03396B" },
  { value: 13, label: "Thailand", color: "#005B96" },
  { value: 20, label: "Myanmar", color: "#619AEB" },
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <>
      <PieChart series={[{ data, innerRadius: 70 }]} {...size}>
        <PieCenterLabel>Followers</PieCenterLabel>
      </PieChart>
    </>
  );
}
