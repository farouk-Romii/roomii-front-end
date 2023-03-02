import  MyListingCard from "./myListingCard"
import React, { useState,useEffect } from 'react';
import Navbarsec from "../navBar/navBar";


const MyListingPage =()=> {
    const [myRooms,setMyRoom] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:3100/room/view`)
        .then(data => data.json())
        .then((room) => {
            console.log(room);
            setMyRoom(room);
        })
    },[])
    return (
        <div>
            <Navbarsec />
            <div className="card-container">
                {myRooms && myRooms.filter(room=> room.user_id == 1).map((room)=> <MyListingCard obj={room} key={room.id}/>)}
            </div>
        </div>
    )
}


export default MyListingPage;