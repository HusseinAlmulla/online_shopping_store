import React from 'react'
import {Link} from 'react-router-dom';

import '../styles/Cover.css';



function Cover({handler}) {
    return (
        <div className="hero-image" >
            <h1 className='text-center'> ...</h1>

            <div className='text-center bg-danger'>
                <h1 className='text-center'>
                    Explore Our Shope
                </h1>

                <Link type="button" className="btn btn-primary"  to='/products'>
                    Start Shopping
                </Link>
            </div>
            
            <h1 className='text-center'> ...</h1>
            <button>Hire me</button>
        </div >
    )
}

export default Cover;

