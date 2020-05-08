import React from "react";
import '../styles/Home.css';
import Welcome from './Welocme';
import Cover from './Cover.js';

const Welocme = ({handler}) => {
    return (
        <div >
            <Welcome />
            <Cover handler={handler} />
        </div>
    );
}

export default Welocme;
