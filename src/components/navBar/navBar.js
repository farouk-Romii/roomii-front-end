import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {useContext,useState} from 'react';
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";


function Navbarsec(){
    let data = useContext(Context);
    const navigate = useNavigate();

    const handelLogout = (e) => {
      e.preventDefault();
      data.setUserData({});
      data.setIsLogin(false);
      navigate("/");

    }

    return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Roomii</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">login</Nav.Link>
                <Nav.Link href="/listings">Linstings</Nav.Link>
                <Nav.Link href="/myListings">MyListings</Nav.Link>
                <Nav.Link href="/myFavorites">myFavorites</Nav.Link>
                <Nav.Link onClick={handelLogout}>logout</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      );
    
}

export default Navbarsec;