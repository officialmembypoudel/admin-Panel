import React from 'react'
import SalesReport from '../SalesReport/SalesReport'
import SideNav from '../SideNav/SideNav'
import './Css/Pages.css'

export default function Sales() {
    return (
        <div>
            <SideNav />
            <div className="page">

                <SalesReport />
            </div>
        </div>
    )
}
