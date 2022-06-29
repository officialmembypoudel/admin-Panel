import React from 'react'
import "./Css/Pages.css"
import { GoPlus } from "react-icons/go";
import SideNav from '../SideNav/SideNav';

export default function Users() {
    return (
        <div>
            <SideNav />
            <div className='page'>
                <h3 className='breadcrum'>Users</h3>
                <section className='user-container'>
                    <div className='user-header'>
                        <h3 className='user-header-text'>All Users</h3>
                        <button className='add-user-btn'><GoPlus className='add-icon' />Add User</button>
                    </div>
                    <div className='user-display'>
                        <table className='table'>
                            <tr>
                                <th>S.No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td className='td-name'>Memby Poudel</td>
                                <td>membypoudel@gmail.com</td>
                                <td>Approved</td>
                                <td>Action</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td className='td-name'>Memby Poudel</td>
                                <td>membypoudel@gmail.com</td>
                                <td>Approved</td>
                                <td>Action</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td className='td-name'>Memby Poudel</td>
                                <td>membypoudel@gmail.com</td>
                                <td>Approved</td>
                                <td>Action</td>
                            </tr>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}
