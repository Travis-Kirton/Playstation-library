import React, { Component } from 'react';
import './common.css';
import img from '../../assets/images/ps_logo.png';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand style={{ width: '100%' }}>
            PlayStation Game Library
          </Navbar.Brand>{' '}
        </Link>
        <Navbar.Brand style={{ width: '100%' }}>
          <Link to="/">
            <img
              alt=""
              src={img}
              height="45"
              className="d-inline-block align-top"
            />{' '}
          </Link>
        </Navbar.Brand>
      </Navbar>
    );
  }
}
