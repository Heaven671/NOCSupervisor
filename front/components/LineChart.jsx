import {fetchData} from './Data.jsx';
import {useState, useEffect} from 'react';
import Chart from "chart.js/auto";
import {Line} from 'react-chartjs-2';

const LineChart = () => {
    const [isData, setData] = useState([]);

    const fetchApi = async () => {
        const data = await fetchData();
        setData(data);
        console.log("fetchData : " + data.data)
      };

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