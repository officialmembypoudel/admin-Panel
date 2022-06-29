import React from "react";
import "../Css/SideDashboard.css"
import DashCards from "../DashCards/DashCards";
import DashInfo from "../DashInfo/DashInfo";
import SalesReport from "../SalesReport/SalesReport";
import SideNav from "../SideNav/SideNav";


const DashBoard = () => {
    return (
        <div>
            <SideNav />
            <main className='side-dash'>
                <h3 className="breadcrum">DASHBOARD</h3>
                <section className="dash-container">
                    <div className="dynamic-contents">
                        <DashCards />
                        <SalesReport />
                        <DashCards />
                    </div>
                    <DashInfo />
                </section>
            </main>
        </div>
    )
}

export default DashBoard;