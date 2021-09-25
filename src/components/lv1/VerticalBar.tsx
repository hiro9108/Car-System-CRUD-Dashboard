import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { CAR_STATUS } from "@/types/globalTypes";

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

export const VerticalBar: React.FC<{ data: CAR_STATUS[] }> = ({ data }) => {
  const [liveCount, setLiveCount] = useState<any>();
  const [soldCount, setSoldCount] = useState<any>();

  useEffect(() => {
    const liveNumber = data.filter((el) => el.status).length;
    setLiveCount(liveNumber);
    setSoldCount(data.length - liveNumber);
  }, [data]);

  return (
    <Bar
      data={{
        labels: ["LIVE", "SOLD"],
        datasets: [
          {
            label: "#CAR STATUS",
            data: [liveCount, soldCount],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      }}
      options={options}
    />
  );
};
