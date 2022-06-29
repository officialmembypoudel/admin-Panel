import React from "react";
import "../Css/SideDashboard.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
    labels: ['Karabor', 'Delivery', 'Trackkon', 'Others'],
    datasets: [
        {
            label: '# of Votes',
            data: [30000, 20000, 42000, 27000],
            backgroundColor: ["#f61379", "#07004c", "#88bfbb", "#ffb703"],
            borderWidth: 0,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false

        }
    }
}
const PieReport = () => {
    return (
        <div className="pie">
            <p className="chart-header">Total Earnings in June</p>
            <p className="chart-header">रु. 119k</p>
            <Pie data={data} options={options} />
        </div>

    )
}

export default PieReport;