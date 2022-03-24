import React from 'react';
import '../css/Header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
// import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import '../css/Queries.css';


class Header extends React.Component {
  render() {
    return <Navbar  collapseOnSelect 
                    fixed='top' 
                    expand="true"
                    variant="light"
                    bg='light'>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

            <Link className="btn-link" to="/">Home</Link>
            <Link className="btn-link btn-coming-soon" to="/schedule">Schedule <p>(Coming soon)</p></Link>
            <Link className="btn-link" to="travel">Travel</Link>
            
            <Link className="btn-link" to="/registry">Registry</Link>
            <Link className="btn-link" to="/faq">Faq's</Link>
            <Link className="btn-link btn-coming-soon" to="/photos">Photo's <p>(Coming soon)</p></Link>
            
    </Nav>
    </Navbar.Collapse>
            {/* <Nav fill>
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
            </Nav> */}
    </Navbar>
  }
}

export default Header;