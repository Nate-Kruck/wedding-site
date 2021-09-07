import React from 'react';
import '../css/Header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';

class Header extends React.Component {
    render() {
        return <Navbar bg="dark" variant="dark">
                        <Nav fill variant="pills">
                                <Nav.Item className="nav">
                                        <Nav.Link className="Home" href="/">Home</Nav.Link>
                                        <Nav.Link className="Details" href="/details">Event Details</Nav.Link>
                                </Nav.Item>
                                
                                <Slide top>
                                <h1 className="main-header">Kruckenberg Wedding</h1>
                                </Slide>

                                <Nav.Item className="nav">
                                        <Nav.Link className="Travel" href="/travel">Travel & Accommodations</Nav.Link>
                                </Nav.Item>
                        </Nav>
               </Navbar>
    }
}

export default Header;