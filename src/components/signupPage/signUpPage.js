import Navbarsec from '../navBar/navBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const SignUpPage = () => {
    return (
        <div>
            <Navbarsec />
            <div style={{ width: "400px", margin: "auto", paddingTop: "100px" }}>
                <Form>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="" placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Type:</Form.Label>
                        <Form.Select >
                            <option>Tenant</option>
                            <option>landlord</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>username:</Form.Label>
                        <Form.Control type="" placeholder="username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
};


export default SignUpPage;