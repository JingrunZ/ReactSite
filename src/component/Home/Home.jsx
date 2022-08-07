import React from 'react'
import Product from '../Product/Product';
import "./Home.scss";
const Navbar = () => {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src="assets/Home/background.jpg" className="card-img" alt="Home_Background"/>
                <div className="card-img-overlay d-flex flex-column">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder">Discover our New Selections</h5>
                        <p className="card-text display-6">Feel the passion about the new season</p>
                    </div>

                </div>
            </div>
            <Product/>
        </div>
    )
}

export default Navbar;
