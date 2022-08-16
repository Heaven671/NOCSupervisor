import {fetchData} from './Data.jsx';
import {useState, useEffect} from 'react';
import Chart from "chart.js/auto";
import {Line} from 'react-chartjs-2';

const LineChart = (props) => {
  let values = [];
  let labels = [];

  //console.log("data value" + Object.values(props.data))
  /*for(let i = 0; i < props.data.length; ++i){
    values.push(props.data[i].value)
    labels.push(props.data[i].oid)
  }*/
  


      const lineChart = (
        <Line
        data={{
            labels: labels,
            datasets: [
              {
                data: values,
                label: props.label,
                borderColor: "rgb(0, 217, 255)",
                fill: true,
              },
            ]
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