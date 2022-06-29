import React from "react";
import "../Css/SideDashboard.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
    labels: ['Organic', 'Facebook', 'Instagram', 'Others'],
    datasets: [
        {
            label: '# of Votes',
            data: [30, 40, 10, 20],
            backgroundColor: ["#04724d", "#564787", "#ff312e", "#f77925"],
            borderWidth: 0,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true

        }
    }
}
const TrafficSrc = () => {
    return (
        <div className="traffic-src">
            <div className="traffic-pie">
                <p className="chart-header">Traffic Sources</p>
                <div className="doughnut">
                    <Doughnut data={data} options={options} />
                </div>
                <p style={{ textAlign: 'center' }}>Facebook is the highest user traffic sources</p>
            </div>
        </div >

    )
}

export default TrafficSrc;