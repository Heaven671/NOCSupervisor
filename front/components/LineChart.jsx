import {fetchData} from './Data.jsx';
import {useState, useEffect} from 'react';
import Chart from "chart.js/auto";
import {Line} from 'react-chartjs-2';

const LineChart = (props) => {
    const [isData, setData] = useState([]);
    const fetchApi = async () => {
      let data = await fetchData;
      console.log("dataaaa: "+ data)
    }
      useEffect(() => {
        fetchApi();
      }, []);

      const lineChart = (
        <Line
        data={{
            labels: ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'],
            datasets: [
              {
                data: isData,
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