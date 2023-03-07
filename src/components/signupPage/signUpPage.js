import Navbarsec from '../navBar/navBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const SignUpPage = () => {
    const navigate = useNavigate();
    
    const [firstName,setFirsttName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [type,setType] = useState("Tenant");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleFistName = (e) => {
        setFirsttName(e.target.value)
        
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
        
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        
    }
    const handleType = (e) => {
        setType(e.target.value)
        
    }
    const handleUsername = (e) => {
        setUsername(e.target.value)
        
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        
    }



    

    const handleSignUpButton = (e) => {
        e.preventDefault();
        let raw = JSON.stringify({
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "type": type,
            "userName": username,
            "password": password
        })
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: raw
        };
        fetch(`http://localhost:3100/authentication/register`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("You've succesfully made an account");
                navigate("/login")
        
            })
            .catch(error => console.log('error', error));
        

    }



    return (
        <div>
            <Navbarsec />
            <div style={{ width: "400px", margin: "auto", paddingTop: "100px" }}>
                <Form>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control value= {firstName} onChange ={handleFistName} type="firstname" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control value= {lastName}  onChange ={handleLastName} type="last name" placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control value= {email}  onChange ={handleEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Type:</Form.Label>
                        <Form.Select value= {type}  onChange ={handleType} >
                            <option>Tenant</option>
                            <option>landlord</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>username:</Form.Label>
                        <Form.Control value= {username}   onChange ={handleUsername} type="username" placeholder="username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control value= {password}  onChange ={handlePassword}  type="password" placeholder="Password" />
                    </Form.Group>

                    <Button onClick={handleSignUpButton} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
};


export default SignUpPage;