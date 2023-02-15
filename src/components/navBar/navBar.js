import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbarsec(){
    return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Roomii</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">login</Nav.Link>
                <Nav.Link href="#pricing">Linstings</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      );
    
}

export default Navbarsec;