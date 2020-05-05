import React from 'react'
// import header from '../../Images/header.jpg';
import '../styles/Cover.css';



function Cover({handler}) {
    return (
        <div className="hero-image" >
            <h1> Welcome to our store</h1>

            <h1 className='text-center'> ...</h1>

            <div className='text-center bg-danger'>
                <h1 className='text-center'>
                    Explore Our Shope
                </h1>

                <button type="button" className="btn btn-primary" onClick={() => handler('CardsList')}>
                    Start Shopping
                </button>
            </div>

            <h1 className='text-center'> ...</h1>

            <button>Hire me</button>


        </div >
    )
}

export default Cover;

