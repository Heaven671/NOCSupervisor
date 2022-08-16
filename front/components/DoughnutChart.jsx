import { Doughnut } from "react-chartjs-2";

const DoughnutChart = (props) => {
    let values = [];
    let labels = [];
    let string = props.label;
    for(let i = 0; i < props.data.length; ++i){
      values.push(props.data[i].value)
      labels.push(props.data[i].oid)
    }

    const DonutChart = (
        <Doughnut
            data = {{
                labels: ['Interface 1','Interface 2','Interface 3'],
                datasets: [
                    {
                      data: values,
                      label: string,
                      fill: true,
                      hoverOffset: 4,
                      backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                      ],
                    },
                ]
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