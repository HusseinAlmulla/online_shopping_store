import React, { Component } from 'react';
import './App.css';
import CardsList from './Components/scripts/CardsList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar2 from './Components/scripts/NavBar';
import Footer from './Components/scripts/Footer.js';
import Cover from './Components/scripts/Cover.js';
import Welcome from './Components/scripts/Welocme.js';
import data from './data.json';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      whichComponentToShow: "landingPage"
    }
  };

  handler = (input) => {
    this.setState({ whichComponentToShow: input });
  }

  render() {
    return (
      <div>
        <NavBar2 handler={this.handler}/>
        {
          this.state.whichComponentToShow === 'landingPage' ?

            <div>
              <Welcome />
              <Cover handler={this.handler} />
            </div>

            : <CardsList data={data} />      
        }



        
        <Footer/>
      </div>
    );
  }
}


export default App;