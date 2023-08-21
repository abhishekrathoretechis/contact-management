import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { format } from "date-fns";
import { useNavigate } from 'react-router-dom';

const LineGraph = () => {
  const [casesData, setCasesData] = useState([]);
  ChartJS.register(ArcElement, Tooltip, Legend);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );
        const data = response.data.cases;

        const formattedData = Object.keys(data).map((date) => ({
          date: new Date(date),
          cases: data[date],
        }));

        setCasesData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: casesData.map((dataPoint) => format(dataPoint.date, "MM/dd/yyyy")), // Format date as "MM/dd/yyyy"
    datasets: [
      {
        label: "Cases",
        data: casesData.map((dataPoint) => dataPoint.cases),
        fill: false,
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <h2>COVID-19 Cases Fluctuation Over Time</h2>
      <button onClick={() => navigate('/map')}>Map</button>
      <Doughnut data={chartData} />
    </div>
  );
};

export default LineGraph;
