import { Pie, PolarArea,Doughnut } from "react-chartjs-2";
import { FcPrevious } from "react-icons/fc";

Object.size = function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };
  
const DoughnutChart = (props) => {
    let values = [];
    let labels = [];
    let used = [];
    let str = [''];

    let string = props.label;
    for(let i = 0; i < Object.size(props.data); ++i){
      values.push(props.data[i].value)
    }

    for(let i = 0; i < Object.size(props.labeldata); ++i){
      labels.push(props.labeldata[i].value)
    }

    for(let i = 0; i < Object.size(props.data); ++i){
        
        used.push((values[i] / labels[i] * 100) == Infinity ? 0 :  (labels[i] / values[i]) * 100)
    }

    let size = Object.size(props.data);
    for(let i = 0; i < size; ++i){
        str[i] = `Partition ${i}`;
    }

    const DonutChart = (
        <Doughnut
            data = {{
                labels: str,
                datasets: [
                    {
                      data: used,
                      label: string,
                      fill: true,
                      hoverOffset: 10,
                      backgroundColor: [
                        '#002B5B',
                        '#2B4865',
                        '#256D85',
                        '#8FE3CF'
                      ],
                    },
                ],
                spacing: 3
        
            }}
            options = {{
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: props.title,
                        color: "white"
                    }
                }
            }}
        />
        )
    return (
        <>
            <div>{DonutChart}</div>
        </>
    );
}

export default DoughnutChart;