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


function MultiLineChart(props) {
  let dt1 = [];
  let dt2 = [];
  let dt3 = [];

  let lb1 = [];
  let lb2 = [];
  let lb3 = [];

  let labels = [''];
  //console.log("data value" + Object.values(props.data))
  /*for(let i = 0; i < Object.size(props.firstDataset); ++i){
    dt1.push(props.firstDataset[i].value)
    lb1.push(props.firstDataset[i].oid)
  }
  for(let i = 0; i < Object.size(props.secondDataset); ++i){
    dt2.push(props.secondDataset[i].value)
    lb2.push(props.secondDataset[i].oid)
  }
  for(let i = 0; i < Object.size(props.thirdDataset); ++i){
    dt3.push(props.thirdDataset[i].value)
    lb3.push(props.thirdDataset[i].oid)
  }*/

  for(let i =0; i< Object.size(props.labeldata); ++i){
    labels.push(props.labeldata[i].value)
  }

  return (
    <>
      <Line
        data={{
            labels: labels,
            datasets: props.data
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

export default MultiLineChart;