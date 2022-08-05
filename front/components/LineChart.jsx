import {fetchData} from './Data.jsx'
import {useState, useEffect} from 'react';
import Chart from "chart.js/auto";
import {Line} from 'react-chartjs-2';

const LineChart = () => {
    const [isData, setData] = useState([]);

    const fetchApi = async () => {
        setData(fetchData);
        console.log(isData)
      };

      useEffect(() => {
        fetchApi();
      }, []);

      const lineChart = isData[0] ? (
        <Line
        data={{
            labels: isData.map(({ date }) =>
              new Date(date).toLocaleDateString()
            ),
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
      ) : null

  return (
    <>
      <div>{lineChart}</div>
    </>
  );
}
export default LineChart;