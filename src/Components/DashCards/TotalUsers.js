import React from "react";
import "../Css/SideDashboard.css";
import { GoPerson, GoStar } from "react-icons/go";
import { RiEyeOffLine } from "react-icons/ri";



const TotalUsers = () => {
    return (
        <div className="card">
            <div>
                <div className="card-header">
                    <h3>TOTAL USERS</h3>
                    <GoPerson className="icon" />
                </div>
                <p className="total-users">80k</p>
                <ul className="user-state">
                    <li><RiEyeOffLine /><p>50k</p></li>
                    <li><GoPerson /><p>30k</p></li>
                </ul>
            </div>
        </div>
    )
}

export default TotalUsers;