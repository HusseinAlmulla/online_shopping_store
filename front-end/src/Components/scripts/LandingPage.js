import React from "react";
import '../styles/Home.css';
import Welcome from './Welocme';
import Cover from './Cover.js';

const LandingPage = () => {
    return (
        <div >
            <Welcome />
            <Cover/>
        </div>
    );
}

export default LandingPage;
