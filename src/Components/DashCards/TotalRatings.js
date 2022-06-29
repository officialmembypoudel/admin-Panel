import React from "react";
import "../Css/SideDashboard.css";
import { GoStar } from "react-icons/go";


const TotalRatings = () => {
    return (
        <div className="card">
            <div>
                <div className="card-header">
                    <h3>TOTAL RATINGS</h3>
                    <GoStar className="icon" />
                </div>
                <p className="total-rating">70k</p>
                <ul className="star-ratings">
                    <li><GoStar /><p>1k</p></li>
                    <li><div><GoStar /><GoStar /></div><p>3k</p></li>
                    <li><div><GoStar /><GoStar /><GoStar /></div><p>20k</p></li>
                    <li><div><GoStar /><GoStar /><GoStar /><GoStar /></div><p>16k</p></li>
                    <li><div><GoStar /><GoStar /><GoStar /><GoStar /></div><p>30k</p></li>

                </ul>
            </div>
        </div>
    )
}

export default TotalRatings;