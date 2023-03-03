import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Navbarsec from "../navBar/navBar";



const RoomDetails = () => {
    const {id} = useParams();
    const [room,setRoom] = useState(null);
    useEffect(()=> {
        fetch(`http://localhost:3100/room/view/${id}`)
        .then(data=> data.json())
        .then(room=> {
            console.log(room);
            setRoom(room);
        })
    },[])
    
    return ( 
        <div className="room-details">
            <Navbarsec />
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 lpi"
                        src={room && room.photos.split(',')[0]}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 lpi"
                        src={room && room.photos.split(',')[1]}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 lpi"
                        src={room && room.photos.split(',')[2]}
                        alt="Third slide"
                    />

                   
                </Carousel.Item>
            </Carousel>
            <div className="des">
                {room && room.description}

            </div>
        
        </div> 
    );
}
 
export default RoomDetails;