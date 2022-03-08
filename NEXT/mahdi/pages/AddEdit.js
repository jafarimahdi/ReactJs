import { Container, Form, Button } from "react-bootstrap";

const AddContact = () => {
    return (
        <Container>
            <Form className="mt-4 col-md-5 mx-auto" >
                <Form.Group className="mb-3" controlId="formBasicName" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicContact">
                    <Form.Label> Contact</Form.Label>
                    <Form.Control type="number" placeholder="Contact" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default AddContact;
