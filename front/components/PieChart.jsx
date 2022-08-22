import {Pie} from 'react-chartjs-2';

const PieChart = (props) => {
    let values = [];
    let labels = [];
    let used = [];
    let str = [''];
    let string = props.label;

    for(let i = 0; i < Object.size(props.data); ++i){
        values.push(props.data[i].value)
        used.push(props.data[i].value/1000000)
    }

    for(let i = 0; i < Object.size(props.labeldata); ++i){
        labels.push(props.labeldata[i].value)
    }

    for(let i = 0; i < Object.size(props.data2);++i){
        used.push(props.data2[i].value/1000000)
    }
    for(let i = 0; i < Object.size(props.data3); ++i){
        used.push(props.data3[i].value/1000000)
    }
    str = ["Memoire totale", "Memoire utilisée", "Memoire libre"]


    const piechart = (
        <Pie
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
        <div>{piechart}</div>
        </>

    )
}

export default PieChart;