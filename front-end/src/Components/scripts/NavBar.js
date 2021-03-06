import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';

import { setSearchFieldAction, requestSearchItemsAction } from '../Actions.js';
import SearchBox from './SearchBox.js';
import '../styles/NavBar.css';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchItemsReducer.searchField,
    user: state.requestUserLoginReducer.user,
    error: state.requestUserLoginReducer.error,
    isPending: state.requestUserLoginReducer.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchFieldAction(event.target.value)),
    onRequestSearch: (keyword) => dispatch(requestSearchItemsAction(keyword))
  }
}

class NavBar extends Component {

  render() {

    const user = this.props.user[0];
    if (user) {
      console.log(user.id);
    }

    return (
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-custom" bg="light" expand="lg">
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">
            <Nav.Link className="link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="link" href="/profile" >
              Profile
            </Nav.Link>
          </Nav>

          <SearchBox onSearchChange={this.props.onSearchChange} onRequestSearch={() => this.props.onRequestSearch(this.props.searchField)} />
          {
            this.props.user[0] !== undefined ?
              <ul ul className="navbar-nav ml-auto">
                <li className="nav-item active" style={{ color: "yellow" }}>
                  Welcome {this.props.user[0].username}
                </li>
              </ul> :
              <ul className="navbar-nav ml-auto">
                <Nav.Link className="link" href="/login">
                  Login
                  </Nav.Link>
                <Nav.Link className="link" href="/register">
                  Register
                </Nav.Link>
              </ul>
          }
        </Navbar.Collapse>
      </Navbar >
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);