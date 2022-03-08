import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/Link";

const myNavbar = () => {
    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Link href="/" passHref >
                <Navbar.Brand >Croud Apps</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-center"
                >
                    <Nav className="">

                        <Link href="/" passHref>
                            <Nav.Link >Home</Nav.Link>
                        </Link>

                        <Link href="/About" passHref>
                            <Nav.Link >About</Nav.Link>
                        </Link>

                        <Link href="/AddEdit" passHref>
                            <Nav.Link >Add Contant</Nav.Link>
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default myNavbar;
