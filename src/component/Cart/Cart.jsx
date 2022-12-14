import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delCart, addCart,minusCart } from '../../redux/action/index';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const state = useSelector((state)=>state.handleCart)

    const allUnique = [
        ...new Map(state.map((item) => [item["title"], item])).values(),
    ];

    const dispatch = useDispatch()
    const handleClose = (item) => {
        dispatch(delCart(item))
    }
    const handlePlus = (item) => {
        dispatch(addCart(item))
    }
    const handlemMinus = (item) => {
        dispatch(minusCart(item))
    }

    const cartItems = (cartItems) => { 
        return(
            <div className='px-4 my-5 bg-light rounded-3'>
                <div className='container py-4'>
                    <button onClick={()=>handleClose(cartItems)} className='btn-close float-end' aria-label='Close'></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={cartItems.image} alt={cartItems.title} height='200px' width='180px'/>
                        </div>
                        <div className='col-md-4'>
                            <h3>{cartItems.title}</h3>
                            <p className='lead fw-bold'>
                                {state.filter(x => x.title===cartItems.title).length} × ${cartItems.price} = ${state.filter(x => x.title===cartItems.title).length * cartItems.price}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={() => handlemMinus(cartItems)}><i className='fa fa-minus'></i></button>
                            <button className="btn btn-outline-dark me-4" onClick={() => handlePlus(cartItems)}><i className='fa fa-plus'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const emptyCart = () =>{
        return(
            <div className='px-4 my-5 bg-light rounded-3 py-5'>
                <div className='container py-4'>
                    <div className='row'>
                        <h2>Your Cart Is Empty</h2>
                    </div>
                </div>
            </div>
        );
    }

    const button = () =>{
        return(
            <div className='container'>
                <div className='row'>
                    <NavLink to="/checkout" className="btn btn-outline-primary w-25 mx-auto">To CheckOut</NavLink>
                </div>
            </div>

        );
    }

    return(
        <>
            {state.length ===0 && emptyCart()}
            {state.length !==0 && allUnique.map(cartItems)}
            {state.length !==0 && button()}
        </>    
    );
}

export default Cart;