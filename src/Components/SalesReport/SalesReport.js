import React from "react";
import "../Css/SideDashboard.css"
import PieReport from "./PieReport";
import BarReport from "./BarReport";


const SalesReport = () => {


    return (
        <div>
            <h3 className="breadcrum">Sales Report</h3>
            <div className="sales-chart">
                <PieReport />
                <BarReport />
            </div>
        </div>
    )

}

export default SalesReport;