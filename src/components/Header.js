import React from 'react';
import '../css/Header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
// import Slide from 'react-reveal/Slide';


class Header extends React.Component {
        render() {
                return <Navbar variant="light" sticky="top">
                        {/* <div className="name-title">
                                <h1>Nathan <span className="small-character">&</span> Willow</h1>
                        </div> */}

                        <Nav fill>
                                <div className="nav-container">
                                <Nav.Item className="nav">
                                        <Nav.Link className="btn-link" href="/">home</Nav.Link>
                                        <Nav.Link className="btn-link" href="/schedule">schedule</Nav.Link>
                                        <Nav.Link className="btn-link" href="/travel">travel & accommodations</Nav.Link>
                                        <Nav.Link className="btn-link" href="/registry">registry</Nav.Link>
                                        <Nav.Link className="btn-link" href="/faq">faq's</Nav.Link>
                                        <Nav.Link className="btn-link" href="/photos">photos</Nav.Link>
                                </Nav.Item>
                                </div>
                        </Nav>
               </Navbar>
    }
}

export default Header;