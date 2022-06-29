import React from "react";
import "../Css/SideDashboard.css"
import TotalOrders from "./TotalOrders";
import TotalRatings from "./TotalRatings";
import TotalUsers from "./TotalUsers";


const DashCards = () => {
    return (
        <div className="dash-cards">
            <TotalRatings />
            <TotalUsers />
            <TotalOrders />
        </div>
    )
}

export default DashCards;