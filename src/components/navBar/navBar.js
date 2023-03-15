import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";
import { Link } from "react-router-dom";

function Navbarsec() {
  const { userData, setUserData, isLogin, setIsLogin } = useContext(Context);
  const navigate = useNavigate();
  const [visiblity, setVisiblity] = useState("block")
  
  const handelLogout = (e) => {
    e.preventDefault();
    setUserData({});
    setIsLogin(false);
    navigate("/");

  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Roomii</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link onClick={() => navigate("/")} >Home</Nav.Link>

            <Nav.Link style={{ display: visiblity }} onClick={() => navigate("/login")}>login</Nav.Link>

            <Nav.Link onClick={() => navigate("/listings")}>Linstings</Nav.Link>
            {() => {
              if (isLogin && userData.type === "Tenant") {
                setVisiblity("none")
                return (<div>
                  <Nav.Link onClick={() => navigate("/myFavorites")}>myFavorites</Nav.Link>
                  <Nav.Link onClick={handelLogout}>logout</Nav.Link>
                </div>
                )
              } else if (isLogin && userData.type === "landlord") {
                setVisiblity("none")
                return (<div>
                  <Nav.Link onClick={() => navigate("/myListings")}>MyListings</Nav.Link>
                  <Nav.Link onClick={handelLogout}>logout</Nav.Link>
                </div>
                )
              }
            }}


          </Nav>
        </Container>
      </Navbar>
    </div>
  );

}

export default Navbarsec;