import Navbarsec from '../navBar/navBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Context from "../../context/Context";
import React, {useContext,useState} from 'react';
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const navigate = useNavigate();
   const {userData,setUserData,isLogin,setIsLogin} = useContext(Context);
    
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = async(e) => {
        e.preventDefault();
        let raw = JSON.stringify({
            "userName": username,
            "password": password
        })
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: raw
        };
        
        let userdata = await fetch(`http://localhost:3100/authentication/login`, requestOptions)
            .then(response => response.json())
            .then(result => result[0])
            .catch(error => console.log('error', error));
            if (userdata) {
                console.log(userdata.type)
                setUserData(userdata);
                setIsLogin(true);
                console.log(userData);
                console.log(isLogin);
                navigate("/listings");
            }else {
                alert("invalid username");
            }
            
    }


    return (
        <div>
            <Navbarsec />
            <div style={{width: "400px", margin: "auto",paddingTop: "100px"}}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control onChange={handleUsername} value ={username} type="username" placeholder="username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control onChange={handlePassword} value={password} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={handleLogin} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}



export default LoginPage