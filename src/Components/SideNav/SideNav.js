import React, { useState } from 'react'
import '../Css/SideNav.css'
import { NavLink } from 'react-router-dom'
import TopNav from './TopNav';

const Nav = () => {
    let [show, setShow] = useState(false)

    const showNav = (shouldShow) => {
        setShow(shouldShow)
    }
    let activeClassName = "active";
    return (
        <div>
            <TopNav showNav={showNav} />
            <div className={show ? `side-panel remove-trns` : 'side-panel translate'}>
                <div className='side-nav'>
                    <NavLink className={({ isActive }) =>
                        isActive ? activeClassName : "link"
                    } to="/dashboard">DashBoard</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? activeClassName : "link"
                    } to="/sales">Sales</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? activeClassName : "link"
                    } to="/users">Users</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? activeClassName : "link"
                    } to="*">Lorem</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Nav;