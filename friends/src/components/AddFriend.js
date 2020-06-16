import React, {useState} from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

export default function AddFriend(props) {

    const initialForm = {name: '', email: '', age: ''}

    const [friend, setFriend] = useState(initialForm)

    const handleChange = (e) => {
        e.preventDefault();
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const addFriend = e => {
        axiosWithAuth().post('/api/friends', friend)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h2>Add new friend</h2>
            <form className="add-form" onSubmit={addFriend}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={friend.name}
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={friend.email}
                    onChange={handleChange}
                />
                <label>Age</label>
                <input
                    type="text"
                    name="age"
                    value={friend.age}
                    onChange={handleChange}
                />
                <button className="add-button">Submit</button>
            </form>
        </div>
    )

}
