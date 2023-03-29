import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Navbarsec from "../navBar/navBar";



const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);

    fetch(`http://localhost:3100/room/view/${id}`)
        .then(data => data.json())
        .then(room => {
            console.log(room);
            setRoom(room);
        })


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
                {room && room.price}
                <br />
                Welcome to our charming suite! This apartment is newly renovated and we have curated stylish and comfortable furniture just for you. Enjoy a memory foam bed, rainfall shower, new kitchen, a quiet dining and relaxing living room. This home is equipped with AC/Heater, 1 car garage +bonus parking, and FREE in-unit washer and dryer.

                All local beaches are within 3-5 miles. SOFI & The Forum within 5-7 miles. All amusement parks are 20-40 miles. Northrup Grumman 1.8 miles, Spacex 3.8 miles
            </div>

        </div>
    );
}

export default RoomDetails;