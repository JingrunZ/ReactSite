import React from 'react'
import Product from '../Product/Product';
import "./Home.scss";
const Navbar = () => {
    return (
        <div className='hero'>
            <div class="card text-bg-dark border-0">
                <img src="assets/Home/background.jpg" class="card-img" alt="Home_Background"/>
                <div class="card-img-overlay d-flex flex-column">
                    <div className="container">
                        <h5 class="card-title display-3 fw-bolder">Discover our New Selections</h5>
                        <p class="card-text display-6">Feel the passion about the new season</p>
                    </div>

                </div>
            </div>
            <Product/>
        </div>
    )
}

export default Navbar;
