import React from "react";
import '../styles/Home.css';
import Welcome from './Welocme';
import Cover from './Cover.js';

const Welocme = () => {
    return (
        <div >
            <Welcome />
            <Cover handler={this.handler} />
        </div>
    );
}

export default Welocme;
