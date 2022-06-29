import React from "react";
import "../Css/SideDashboard.css";
import { GoAlert, GoArchive, GoChecklist } from "react-icons/go";
import { RiEyeOffLine } from "react-icons/ri";


const TotalOrders = () => {
    return (
        <div className="card">
            <div>
                <div className="card-header">
                    <h3>TOTAL ORDERS</h3>
                    <GoArchive className="icon" />
                </div>
                <p className="total-users">80k</p>
                <ul className="user-state">
                    <li><GoChecklist /><p>79.5k</p></li>
                    <li><GoAlert /><p>0.5k</p></li>
                </ul>
            </div>
        </div>
    )
}

export default TotalOrders;