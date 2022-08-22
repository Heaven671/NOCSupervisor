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
    console.log("props : "+ JSON.stringify(props))
    let string = props.label;


    if(props.options == 1){

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

    }
    if(props.options == 0){
      for(let i = 0; i < Object.size(props.data);++i){
        used.push(props.data[i].value)
      }
      for(let i = 0; i < Object.size(props.data2);++i){
        used.push(props.data2[i].value)
      }
      for(let i = 0; i < Object.size(props.data3); ++i){
        used.push(props.data3[i].value)
      }
      str = ["Memoire totale", "Memoire utilisée", "Memoire libre"]

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
                      backgroundColor: props.bg,
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