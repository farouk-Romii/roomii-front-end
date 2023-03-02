import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import "./listing_card.css"
import React, { useState,useEffect } from 'react';

function ListingCard(props) {
    
    const {description,photos,price,location,id,user_id} = props.obj;
    const [count, setCount] = useState(0)
    const addToFav=()=> {
        console.log("hey")
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: 1,listId: id})
        };
        fetch(`http://localhost:3100/favorites/add`,requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }
   
    console.log(props.obj)
    return (
      <Card style={{ width: '20rem',margin: "10px 20px" }}>
        <Carousel wrap ={false} interval={null}>
            <Carousel.Item wrap ={false} >
                <Card.Img variant="top" src={photos.split(',')[0]} alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item  wrap ={false} interval={null}>
                <Card.Img variant="top" src={photos.split(',')[1]} alt="Second slide"/>
            </Carousel.Item>
            <Carousel.Item wrap ={false} interval={null}>
                <Card.Img variant="top" src={photos.split(',')[2]} alt="Third slide"/>
            </Carousel.Item>
        </Carousel>
        
        <Card.Body>
          <Card.Title>{location}</Card.Title>
          <Card.Text>
            {description}
            <br/>
            {"Monthly " +'$'+ price}
          </Card.Text>
          <div className='card_b'>
            <Button variant="primary">View Details</Button>
            <Button onClick={() => {addToFav()}} variant="primary">add to favorites</Button>
          </div>
          
        </Card.Body>
      </Card>
    );
  }
  
  export default ListingCard;