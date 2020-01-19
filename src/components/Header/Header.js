import {Link, NavLink} from "react-router-dom";
import React from 'react';
import classes from './Header.module.css';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const Header = (props) => {
    return <div className={classes.wrap1}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/main">Sky Agency</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="About us" id="collasible-nav-dropdown" className={classes.item}>
                        <NavDropdown.Item as={Link} to="/mission">Mission</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/goals">Goals</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/realtors">Our realtors</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/jobs">Jobs</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        {/*<NavDropdown.Item href="#action/3.6">Separated link</NavDropdown.Item>*/}
                    </NavDropdown>
                    <Nav.Link as={Link} to="/catalog" className={classes.item}>Catalog</Nav.Link>
                    <NavDropdown title="Services" id="collasible-nav-dropdown" className={classes.item}>
                        <NavDropdown.Item as={Link} to="/selling">To the owners</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/evaluation">Real estate appraisal</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/advertising">Advertising</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/catalog">Buying apartments</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/rent">Apartments for rent</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        {/*<NavDropdown.Item href="#action/3.6">Separated link</NavDropdown.Item>*/}
                    </NavDropdown>
                    <Nav.Link as={Link} to="/contacts" className={classes.item}>Contacts</Nav.Link>
                    <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
                </Nav>
                <Nav>
                    {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>logout</button></div> :
                        <Nav.Link as={Link} to="/login" className={classes.item}>Sign in</Nav.Link>}
                    <Nav.Link as={Link} to="/register">
                        Sign up
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>

    // <nav className={classes.nav}>
    //     <div className={classes.item}>
    //         <NavLink to='/home' activeClassName={classes.active}>Home</NavLink>
    //     </div>
    //     <div className={classes.item}>
    //         <NavLink to='/about' activeClassName={classes.active}>About us</NavLink>
    //     </div>
    //     <div className={classes.item}>
    //         <NavLink to='/catalog' activeClassName={classes.active}>Catalog</NavLink>
    //     </div>
    //     <div className={classes.item}>
    //         <NavLink to='/contacts' activeClassName={classes.active}>Contacts</NavLink>
    //     </div>
    //     <div className={classes.item}>
    //         <NavLink to='/reviews' activeClassName={classes.active}>Reviews</NavLink>
    //     </div>
    // </nav>
};

export default Header;