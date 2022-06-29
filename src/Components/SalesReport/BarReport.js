import React from "react";
import "../Css/SideDashboard.css"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const options = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
        legend: {
            position: 'top'

        },


        title: {
            display: false,
        },
    },
};
const data = {

    labels: ["March", "April", "May", "June"],
    datasets: [{
        label: "Karobar",
        data: [5, 2, 4, 6],
        backgroundColor: "#f61379",
    },
    {
        label: "Delivery",
        data: [4, 3, 3, 5],
        backgroundColor: "#07004c"
    },
    {
        label: "Trackkon",
        data: [4, 5, 4, 6],
        backgroundColor: "#88bfbb"
    },
    {
        label: "Others",
        data: [4, 6, 1, 3],
        backgroundColor: "#ffb703"
    },
    ],


}


const BarReport = () => {
    return (
        <div className="bar">
            <p className="chart-header">Apps Sold In Past Months</p>
            <Bar data={data} options={options} />
        </div>
    )
}

export default BarReport;