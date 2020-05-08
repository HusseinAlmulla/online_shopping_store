import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CardsList from './Components/scripts/CardsList.js';
import NavBar2 from './Components/scripts/NavBar';
import Footer from './Components/scripts/Footer.js';
import LandingPage from './Components/scripts/LandingPage.js';
import Register from './Components/scripts/Register.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './data.json';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      whichComponentToShow: "landingPage",
      user: {
        userid: '',
        username: '',
        email: '',
        dateJoined: '',
      }
    }
  };

  handler = (input) => {
    this.setState({ whichComponentToShow: input });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar2 handler={this.handler} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={LandingPage} />
          <Route path="/products" render={(props) => <CardsList {...props} data={data} />} />
          <Footer />
        </BrowserRouter>
      </div >
    );
  }
}


export default App;