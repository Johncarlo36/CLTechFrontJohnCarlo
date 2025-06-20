import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import UserContext from '../context/UserContext';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function AppNavbar() {
    const { user } = useContext(UserContext);
    const [fadeIn, setFadeIn] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setTimeout(() => setFadeIn(true), 100);
    }, []);

    const navbarStyle = {
        background: 'linear-gradient(90deg, #007cf0, #ff0080)',
        transition: 'all 0.8s ease',
        transform: fadeIn ? 'translateY(0)' : 'translateY(-20px)',
        opacity: fadeIn ? 1 : 0,
    };

    const navLinkStyle = {
        color: '#fff',
        textTransform: 'uppercase',
        position: 'relative',
        transition: 'color 0.3s ease',
        marginRight: '10px',
    };

    const navLinkHoverStyle = `
        .nav-link:hover {
            color: #ffd700 !important;
        }
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #fff;
            transition: width 0.4s;
        }
        .nav-link:hover::after {
            width: 100%;
        }
    `;

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching for: ${searchTerm}`);
        setSearchTerm('');
    };

    return (
        <>
            <style>{navLinkHoverStyle}</style>
            <Navbar expand="lg" style={navbarStyle} className="shadow-sm sticky-top">
                <Container fluid>
                    <Navbar.Brand
                        as={NavLink}
                        to="/"
                        className="fw-bold text-white text-uppercase d-flex align-items-center me-4"
                    >
                        <i className="bi bi-book-half me-2 fs-4"></i> CLTech Booking
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" className="bg-white" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/" exact="true" className="nav-link" style={navLinkStyle}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/courses" exact="true" className="nav-link" style={navLinkStyle}>
                                Courses
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/news" exact="true" className="nav-link" style={navLinkStyle}>
                                News
                            </Nav.Link>
                            {user && user.id !== null && user.isAdmin && (
                                <Nav.Link as={NavLink} to="/addCourse" className="nav-link" style={navLinkStyle}>
                                    Add Course
                                </Nav.Link>
                            )}
                            {user && user.id !== null && !user.isAdmin && (
                                <Nav.Link as={NavLink} to="/profile" className="nav-link" style={navLinkStyle}>
                                    Profile
                                </Nav.Link>
                            )}
                        </Nav>
                        <Form className="d-flex me-3" onSubmit={handleSearch}>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Button variant="warning" type="submit">
                                <i className="bi bi-search"></i>
                            </Button>
                        </Form>
                        <Nav>
                            {user && user.id !== null ? (
                                <Nav.Link as={NavLink} to="/logout" className="nav-link" style={navLinkStyle}>
                                    Logout
                                </Nav.Link>
                            ) : (
                                <>
                                    <Nav.Link as={NavLink} to="/login" className="nav-link" style={navLinkStyle}>
                                        Login
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/register" className="nav-link" style={navLinkStyle}>
                                        Register
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
