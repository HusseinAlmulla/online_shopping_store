import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CardsList from './Components/scripts/CardsList.js';
import NavBar from './Components/scripts/NavBar';
import Footer from './Components/scripts/Footer.js';
import LandingPage from './Components/scripts/LandingPage.js';
import Register from './Components/scripts/Register.js';
import ProductDetails from './Components/scripts/ProductDetails.js';
import CatagoryMenu from './Components/scripts/CategoryMenu.js';
import UserProfile from './Components/scripts/UserProfile.js';
import EditUserProfile from './Components/scripts/EditUserProfile.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Components/scripts/Login.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      whichComponentToShow: "landingPage",
      user: {
        userid: '',
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        date_birth: '',
        dateJoined: '',
      }
    }
  };

  setUser = (data) => {
    this.setState({
      user: {
        username: data.username,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        date_birth: data.date_birth,
        dateJoined: data.joined,
      }
    })
  }

  handler = (input) => {
    this.setState({ whichComponentToShow: input });
  }

  render() {
    return (
      <div>
        <BrowserRouter>

          <NavBar/>
          <CatagoryMenu />
          <Route exact path="/register" render={(props) => <Register {...props} setUser={this.setUser} />} />
          <Route exact path='/login' component={Login} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/products" render={(props) => <CardsList {...props} />} />
          <Route exact path="/products/item/:id" component={ProductDetails} />
          <Route exact path='/profile' component={UserProfile} />
          <Route exact path='/editprofile' component={EditUserProfile} />
          <Footer />

        </BrowserRouter>
      </div >
    );
  }
}

export default App;