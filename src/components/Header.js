import React from 'react';
import '../css/Header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
// import Slide from 'react-reveal/Slide';


class Header extends React.Component {
        render() {
                return <Navbar sticky="top">
                        {/* <div className="name-title">
                                <h1>Nathan <span className="small-character">&</span> Willow</h1>
                        </div> */}

                        <Nav fill>
                                <Nav.Item className="nav">
                                        <Nav.Link className="btn-link" href="/">HOME</Nav.Link>
                                        <Nav.Link className="btn-link" href="/schedule">SCHEDULE</Nav.Link>
                                        <Nav.Link className="btn-link" href="/travel">TRAVEL & ACCOMMODATIONS</Nav.Link>
                                        <Nav.Link className="btn-link" href="/registry">REGISTRY</Nav.Link>
                                        <Nav.Link className="btn-link" href="/photos">PHOTOS</Nav.Link>
                                </Nav.Item>
                        </Nav>
               </Navbar>
    }
}

export default Header;