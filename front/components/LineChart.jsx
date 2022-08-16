import {fetchData} from './Data.jsx';
import {useState, useEffect} from 'react';
import Chart from "chart.js/auto";
import {Line} from 'react-chartjs-2';

const LineChart = (props) => {

      const lineChart = (
        <Line
        data={{
            labels: [''],
            datasets: [
              {
                data: "",
                label: "IfOutOctets",
                borderColor: "rgb(0, 217, 255)",
                fill: true,
              },
            ],
          }}
        />
      )

  return (
    <>
      <div>{lineChart}</div>
    </>
  );
}

export default LineChart;