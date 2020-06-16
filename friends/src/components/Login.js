import React, { useState } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import '../App.css';

export default function Login(props) {

    const initialCredentials = {username: '', password: ''}

    const [user, setUser] = useState(initialCredentials);

    const handleChanges = e => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const login = e => {
        e.preventDefault();
        axiosWithAuth().post('/api/login', user)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', JSON.stringify(res.data.payload));
            props.history.push('/friendlist');
        })
        .catch(err => {
            console.log(err);
        })
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={login}>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChanges}
                    placeholder="Username"
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChanges}
                    placeholder="Password"
                />
                <button>Submit</button>
                <p>Lambda School</p>
                <p>{`i<3Lambd4`}</p>
            </form>
        </div>
    )
}
