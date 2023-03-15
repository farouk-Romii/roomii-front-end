import { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "./favoritesCard.css";
import Context from "../../context/Context";

const FavoritesCard = (props) => {
    const {userData,setUserData,isLogin,setIsLogin} = useContext(Context);
    const [visiblity, setVisiblity] = useState("block")
    const {description,photos,price,location,id,user_id} = props.obj;
   
    const deleteFav = () => {
        fetch(`http://localhost:3100/favorites/remove/${id}/${userData.id}`, {method: 'DELETE',redirect: 'follow'})
        .then(data => data.json())
        .then((json) => {
            console.log("favorite item deleted")
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
                        <Link to={`/room/${id}`}><Button variant="primary" >View Details</Button></Link>
                        <Button onClick={() => {
                            deleteFav()
                            setVisiblity("none")
                            }}variant="primary">remove</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}


export default FavoritesCard;