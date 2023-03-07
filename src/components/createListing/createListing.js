import Navbarsec from '../navBar/navBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Context from "../../context/Context";
import React, {useContext,useState} from 'react';
import { useNavigate } from "react-router-dom";


const CreateListingPage = () => {
    let data = useContext(Context);
    const navigate = useNavigate();


    const [photos,setPhotos] = useState("");
    const [price,SetPrice] = useState("");
    const [location,setLocation] = useState("Bronx");
    const [description,setDescription] = useState("");

    const handlePhotos=(e)=> {
        setPhotos(e.target.value);
    }
    const handlePrice=(e)=> {
        SetPrice(e.target.value);
    }
    const handleLocation=(e)=> {
        setLocation(e.target.value);
    }
    const handleDescription=(e)=> {
        setDescription(e.target.value);
    }

    const handleSubmitCreateButton =(e)=> {
        e.preventDefault();
        let raw = JSON.stringify({
            "description": description,
            "photos": photos,
            "price": price,
            "location": location,
            "userId": data.id,
        })
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: raw
        };
        fetch(`http://localhost:3100/room/add`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("You've succesfully create a listing");
                navigate("/myListings");
        
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div>

            <Navbarsec />
            <div style={{ width: "400px", margin: "auto", paddingTop: "100px" }}>
                <Form>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control value={description} onChange={handleDescription} as="textarea" rows={4} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Photos:</Form.Label>
                        <Form.Control value={photos}  onChange={handlePhotos} type="" placeholder="Photos" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price:</Form.Label>
                        <Form.Control value={price}  onChange={handlePrice} type="email" placeholder="Price" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Location:</Form.Label>
                        <Form.Select value={location}  onChange={handleLocation} >
                            <option>Bronx</option>
                            <option>Queens</option>
                            <option>Brooklyn</option>
                            <option>Manhattan</option>
                        </Form.Select>
                    </Form.Group>

                    <Button onClick={handleSubmitCreateButton} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>


    );
}

export default CreateListingPage;