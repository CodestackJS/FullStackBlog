import { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { createAccount } from '../Services/DataService';

const CreateAccount = () => {

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    //Function or method to handle our user
    const handleUser = (e) => {
        setUsername(e.target.value);
    }

    //Function or method to handle our password
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    //Function or method to handle our submit
    const handleSubmit = () => {
        let userData = {
            username: Username,
            password: Password
        }
        createAccount(userData);
        console.log(userData);
    }


    return (
        <>
            <Container>
                <Row>
                    <Col className="form-container d-flex justify-content-center">
                    {/* <h1>Account Page</h1> */}
                        <Form>
                            <p className='text-center'>Create Account</p>
                            <Form.Group className="mb-3" controlId="Username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" onChange={handleUser} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" onChange={handlePassword} />
                            </Form.Group>

                            
                            <Button variant="outline-primary" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>




        </>
    )
}

export default CreateAccount;