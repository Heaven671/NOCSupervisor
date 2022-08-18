import {fetchData} from './Data.jsx';
import {useState, useEffect} from 'react';
import Chart from "chart.js/auto";
import {Line} from 'react-chartjs-2';
import { background } from '@chakra-ui/react';

Object.size = function(obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};


function LineChart(props) {
  let values = [];
  let labels = [''];
  //console.log("data value" + Object.values(props.data))
  for(let i = 0; i < Object.size(props.data); ++i){
    values.push(props.data[i].value)
  }

  for(let i =0; i< Object.size(props.labeldata); ++i){
    labels.push(props.labeldata[i].value)
  }
  
  return (
    <>
      <Line
        data={{
            labels: labels,
            datasets: [
              {
                data: values,
                label: props.label,
                borderColor: "rgb(0, 217, 255)",
                backgroundColor: "#8FE3CF"
              },
            ]
          }}
          options ={{
            responsive: true,
              plugins:{
                title: {
                  display: true,
                  text: props.title,
                  color: "white"
                }
              }
          }}
        />
    </>
  );
}

export default LineChart;