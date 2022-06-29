import React, { useState } from 'react'
import './Css/LoginRes.css'
import { useNavigate } from 'react-router-dom'
import { credentials } from '../../Credentials/UserPass';


function Register() {
    const [newUser, setNewUser] = useState({
        id: undefined,
        username: '',
        email: '',
        password: ''
    })
    const [accountCreated, SetAccountCreated] = useState(false)
    const [usernameExists, SetUsernameExists] = useState(false)
    const [isBlank, setIsBlank] = useState(false)

    let navigate = useNavigate();

    const handelInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        setNewUser({ ...newUser, id: credentials.length + 1, [name]: value })
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        if (newUser.username === '' || newUser.password === '' || newUser.email === '') {
            setIsBlank(true)
        } else {
            if (credentials.length > 0 && credentials.find(user => newUser.username === user.username)) {
                SetUsernameExists(true)
            } else {
                SetUsernameExists(false)
                credentials.push(newUser)
                SetAccountCreated(true)
                setIsBlank(false)
                setNewUser({ ...newUser, id: undefined, username: '', email: '', password: '' })
            }

        }
        // return navigate('/dashboard')
    }

    return (
        <div className='flex my-prim-bg-color'>
            <div className="res-form-container my-prim-bg-color">
                <h1>ITSoch Admin Register</h1>
                <form className='form-login' onSubmit={handelSubmit}>
                    <div className='form-control'>
                        <label htmlFor="username">Username</label>
                        <input type="text" name='username' id='username' value={newUser.username} onChange={handelInput} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' value={newUser.email} onChange={handelInput} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' value={newUser.password} onChange={handelInput} />
                    </div>
                    <div className='form-btn'>
                        <button type='submit'>Register</button>
                    </div>
                    {accountCreated && <p className='success-tag'>Account Created Please Login Now.</p>}
                    {usernameExists && <p className='err-tag err-tag-res'>Username Already Exists. Create New.</p>}
                    {isBlank && <p className='err-tag err-tag-res'>Fields are Blank.</p>}

                    <p className='register-tag'>Have an Account? <span onClick={() => {
                        navigate('/')

                    }}>Login Here!</span></p>
                </form>
            </div>
        </div>
    )
}

export default Register