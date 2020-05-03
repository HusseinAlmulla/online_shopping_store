import React,{Component} from 'react';
import buttonComp from './buttonComp';
import App from '../App';



class Welocme extends Component {
    constructor(props) {
      super(props)
      this.state = { whichComponentToShow: "landingPage" }
    };
  
    render() {

        if (this.state.whichComponentToShow==='landingPage'){
            return(
                <div>
              <h1 className='text-center'> ...</h1>
                <div className='text-center bg-danger'>
                    <h1 className='text-center'> Explore Our Shope</h1>
            <button type="button" className="btn btn-primary" onClick={()=> {this.setState({whichComponentToShow:"app"});}}>Start Shopping</button>
                </div>
              <h1 className='text-center'> ...</h1>
          </div>
            );
        }
        if(this.state.whichComponentToShow==='app'){
            return(
                <div>
                    <App/>
                </div>
            )
        }
    }
}

export default Welocme;


