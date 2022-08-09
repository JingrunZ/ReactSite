import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="container my-5 py-5">
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Jingrun Zhang</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <h3 className='fw-bolder'>Basic Information</h3>
                    <p className='info'>Hi, My name is Jingrun Zhang</p>
                    <h3 className='fw-bolder'>Education</h3>
                    <p className='info'>Computer Science at Ryerson University</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;