import React from "react";
import "../Css/SideDashboard.css";
import TodoList from "./TodoList";
import TrafficSrc from "./TrafficSrc";



const DashInfo = () => {
    return (
        <div className="dash-info">
            <TodoList />
            <TrafficSrc />
        </div>
    )
}

export default DashInfo;