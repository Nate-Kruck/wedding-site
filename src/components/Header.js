import React from 'react';
import '../Header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return <Navbar bg="dark" variant="dark">
                        <Nav fill variant="pills">
                                <Nav.Item className="nav">
                                        <Nav.Link className="Home" href="/">Home</Nav.Link>
                                        <Nav.Link className="Details" href="/details">Event Details</Nav.Link>
                                </Nav.Item>

                                <h1>Kruckenberg Wedding</h1>
                            
                                <Nav.Item className="nav">
                                        <Nav.Link className="Travel" href="/travel">Travel</Nav.Link>
                                        <Nav.Link className="Accommodations" href="/accommodations">Accommodations</Nav.Link>
                                </Nav.Item>
                        </Nav>
               </Navbar>
    }
}

export default Header;