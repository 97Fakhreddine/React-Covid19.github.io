import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

import { fetchDailyData } from "../config/api";

import "../styles/charts.css";

const Chart = ({
  data: { confirmed, recovered, deaths },
  country,
}: any): JSX.Element => {
  interface DailyData {
    confirmed: object;
    recovered: object;
    deaths: object;
  }

  const [dailyData, setDailyData] = useState<[DailyData] | string[]>([""]);

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#f48a04", "#02ab02", "#bf0325"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
      }}
    />
  ) : null;

  const lineChart = dailyData[1] ? (
    <Bar
      data={{
        labels: dailyData.map(({ date }: any) => date),
        datasets: [
          {
            data: dailyData.map((data: any) => data.confirmed),
            label: "Infected",
            borderColor: "#f48a04",
            backgroundColor: "white",
          },
          {
            data: dailyData.map((data: any) => data.recovered),
            label: "Infected",
            borderColor: "#f48a04",
            backgroundColor: "white",
          },

          {
            data: dailyData.map((data: any) => data.deaths),
            label: "Deaths",
            borderColor: "#bf0325",
            backgroundColor: "white",
          },
        ],
      }}
    />
  ) : null;

  return <div className='container'>{country ? barChart : barChart}</div>;
};

export default Chart;
