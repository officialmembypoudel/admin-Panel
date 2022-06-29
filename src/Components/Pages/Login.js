import React, { useState } from 'react'
import './Css/LoginRes.css'
import { useNavigate } from 'react-router-dom'
import { credentials } from '../../Credentials/UserPass';


function Login() {
    const allCredt = credentials
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [wrongCredt, setWrongCredt] = useState(false)


    let navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();

        for (let i = 0; i < allCredt.length; i++) {
            if (allCredt[i].username === username && allCredt[i].password === password) {
                return navigate('/dashboard')
            } else {
                setWrongCredt(true)
            }
        }
    }

    return (
        <div className='flex'>
            <div className="res-form-container">
                <h1>ITSoch Admin Login</h1>
                <form className='form-login' onSubmit={handelSubmit}>
                    <div className='form-control'>
                        <label htmlFor="username">Username</label>
                        <input autoComplete="off" type="text" id='username' name='username' value={username} onChange={(e) => {
                            setUsername(e.target.value)
                        }} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input autoComplete='off' type="password" id='password' name='password' value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                    </div>
                    <div className='form-btn'>
                        <button type='submit'>Login</button>
                    </div>
                    {wrongCredt && <p className='err-tag'>Fields Are Empty or Username & Password Doesnot Match.</p>}
                    <p className='register-tag'>Don't Have An Account? <span onClick={() => { navigate('/register') }}>Register Here!</span></p>
                </form>
            </div>
        </div>
    )
}

export default Login