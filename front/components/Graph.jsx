import {useState, useEffect} from 'react'
import {Bar} from 'react-chartjs-2'

const Chart = require('chart.js')

export const Graph = ({charData }) => {
    
    return (
        <div>
            <Bar
                data={charData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Uptime"
                        },
                        legends: {
                            display: true,
                            position: "bottom"
                        }
                    }
                }}
                />
        </div>
    );
}

export default Graph;