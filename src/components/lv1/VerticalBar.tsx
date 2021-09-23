import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue"],
  datasets: [
    {
      label: "#Car Status",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

const options: any = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export const VerticalBar: React.FC = () => (
  <Bar data={data} options={options} />
);
