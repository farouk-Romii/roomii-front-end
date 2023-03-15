import MyListingCard from "./myListingCard"
import React, { useState, useEffect, useContext } from 'react';
import Navbarsec from "../navBar/navBar";
import Context from "../../context/Context";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const MyListingPage = () => {
    const { userData, setUserData, isLogin, setIsLogin } = useContext(Context);
    const [myRooms, setMyRoom] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3100/room/view`)
            .then(data => data.json())
            .then((room) => {
                console.log(room);
                setMyRoom(room);
            })
    }, [])
    return (
        <div>
            <Navbarsec />
            <Card onClick ={()=> navigate("/create")}style={{ width: '18rem',margin: "10px 20px"}}>
                <Card.Img variant="top"  />
                <Card.Body>
                <div style={{display: "flex",justifyContent: "center"}}><svg xmlns="http://www.w3.org/2000/svg" width="100" height="150" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg></div>
                </Card.Body>
            </Card>
            <div className="card-container">
                {myRooms && myRooms.filter(room => room.user_id == userData.id).map((room) => <MyListingCard obj={room} key={room.id} />)}
            </div>

            
            
            
        </div>
    )
}


export default MyListingPage;