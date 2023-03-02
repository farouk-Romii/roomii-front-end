
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyListingCard = (props) => {
    const [visiblity, setVisiblity] = useState("block")
    const {description,photos,price,location,id,user_id, setFavs} = props.obj;
    console.log(setFavs)
    const deleteFav = () => {
        fetch(`http://localhost:3100/room/remove/${id}`, {method: 'DELETE',redirect: 'follow'})
        .then(data => data.json())
        .then((json) => {
            return json})

    }

    return (
        <div>
            <Card style={{ width: '18rem',margin: "10px 20px",display: visiblity}}>
                <Card.Img variant="top" src={photos.split(',')[0]} />
                <Card.Body>
                    <Card.Title>{location}</Card.Title>
                    <Card.Text>
                       {price}
                    </Card.Text>
                    <div className='card_b'>
                        <Button variant="primary">View Details</Button>
                        <Button variant="primary">Edit</Button>
                        <Button onClick={() => {
                            deleteFav()
                            setVisiblity("none")
                            }}variant="primary">Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}


export default MyListingCard;