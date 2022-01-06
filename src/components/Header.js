import React from 'react';
import '../css/Header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
// import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import '../css/Queries.css';


class Header extends React.Component {
        render() {
                return <Navbar variant="light" sticky="top">
                        {/* <div className="name-title">
                                <h1>Nathan <span className="small-character">&</span> Willow</h1>
                        </div> */}

                        <Nav fill>
                                <div className="nav-container">
                                <Nav.Item className="nav">
                                        <Link className="btn-link" to="/">home</Link>
                                        <Link className="btn-link" to="/schedule">schedule</Link>
                                        <Link className="btn-link" to="/travel">travel & accommodations</Link>
                                        <Link className="btn-link" to="/registry">registry</Link>
                                        <Link className="btn-link" to="/faq">faq's</Link>
                                        <Link className="btn-link" to="/photos">photos</Link>
                                </Nav.Item>
                                </div>
                        </Nav>
               </Navbar>
    }
}

export default Header;