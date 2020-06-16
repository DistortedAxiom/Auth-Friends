import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

import AddFriend from './AddFriend';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 2rem;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height: 30vh;
    background-color: #768FE0;
    border-radius: 4px;
    padding: 1rem;
    margin: 1rem;
    margin-top: 3rem;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    flex: 0 0 25%;
`;

const Title = styled.h3`
    font-size: 2rem;
    font-weight: 300;
    margin: 1rem;
    color: white;
`;

const Description = styled.div`
    color: white;
    font-size: 1.1rem;
`;

export default function FriendsList() {

    const [friends, setFriends] = useState([]);

    const getData = () => {
        axiosWithAuth().get('/api/friends')
        .then(res => {
            setFriends(res.data)
        })
    }

    const deleteData = (id) => {
        axiosWithAuth().delete(`/api/friends/${id}`)
    }

    useEffect(() => {
        getData()
    }, [friends])

    return (
        <div>
            <div>
            <AddFriend />
            <h1>Here are the friends</h1>
            <Container>
                {friends.map((item, i) => (
                    <Wrapper key={i}>
                        <Title>{item.name}</Title>
                        <Description>
                            <p>Age: {item.age}</p>
                            <p>Email: {item.email}</p>
                            <p>ID: {item.id}</p>
                        </Description>
                        <div>
                            <button type="button" className="delete-button" onClick={() => {deleteData(item.id)}}>DELETE</button>
                        </div>
                    </Wrapper>
                ))}
            </Container>
            </div>
        </div>
    )

}
