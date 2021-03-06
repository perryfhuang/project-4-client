import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Dropdown } from 'react-bootstrap'
import { HouseDoorFill, PencilSquare, PersonFill } from 'react-bootstrap-icons'

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#workouts" style={{ textAlign: 'center', fontSize: '14px' }}><HouseDoorFill size={25}/><br />Feed</Nav.Link>
    <Nav.Link href="#users" style={{ textAlign: 'center', fontSize: '14px' }}><i style={{ fontSize: '1.7em' }} className="fas fa-users"></i><br />Athletes</Nav.Link>
    <Nav.Link href="#sign-up" style={{ textAlign: 'center', fontSize: '14px' }}><i className="fas fa-user-plus" style={{ fontSize: '1.7em' }}></i><br />Sign Up</Nav.Link>
    <Nav.Link href="#sign-in" style={{ textAlign: 'center', fontSize: '14px' }}><i className="fas fa-sign-in-alt" style={{ fontSize: '1.7em' }}></i><br />Sign In</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="danger" variant="dark" expand="sm">
    <Navbar.Brand href="#/">
      IRONMAN Fit
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { /* { alwaysOptions } */ }
        { user ? <Fragment>
          { user && <span className="navbar-text mr-2 navbar" style={{ margin: 'auto 0' }}>Welcome, {user.name}</span>}
          <Nav.Link href="#workouts" style={{ textAlign: 'center', fontSize: '14px' }}><HouseDoorFill size={25}/><br />Feed</Nav.Link>
          <Nav.Link href="#log-workout" style={{ textAlign: 'center', fontSize: '14px' }}><PencilSquare size={25}/><br />Log Workout</Nav.Link>
          <Nav.Link href="#users" style={{ textAlign: 'center', fontSize: '14px' }}><i style={{ fontSize: '1.7em' }} className="fas fa-users"></i><br />Athletes</Nav.Link>
          <Dropdown style={{ textAlign: 'center', fontSize: '14px' }} alignRight>
            <Dropdown.Toggle variant="danger">
              <PersonFill size={25}/><br />
              <span>Profile</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href={`#/users/${user.id}`}>View Profile</Dropdown.Item>
              <Dropdown.Item href={`#/edit-profile/${user.id}`}>Edit Profile</Dropdown.Item>
              <Dropdown.Item href="#change-password">Change Password</Dropdown.Item>
              <Dropdown.Item href="#sign-out">Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Fragment>
          : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
