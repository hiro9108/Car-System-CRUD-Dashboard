import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Color } from "@/theme";
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
            backgroundColor: [Color.verticalBarBG, Color.verticalBarBG],
            borderColor: [Color.SecondaryLight, Color.SecondaryLight],
            borderWidth: 1,
          },
        ],
      }}
      options={options}
      className="p-10"
    />
  );
};
