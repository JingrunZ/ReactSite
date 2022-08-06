import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router'

import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/action/index';


const Info = () => {
    const {id} = useParams();
    const [info,setInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const dispatch = useDispatch();
    const addProduct = (pro) => {
        dispatch(addCart(pro));
    }

    useEffect(()=>{
        const getInfo = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setInfo(await response.json());
            setLoading(false);
        }
        getInfo();
    },[]);
    
    const Loading = () =>{
        return(
            <>
                Loading......
            </>
        )
    }

    const ShowInfo = () =>{
        return(
            <>
                <div className='col-md-6'>
                    <img src={info.image} alt={info.title} height='400px' width='400px'/>
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>
                        {info.category}
                    </h4>
                    <h1 className='display-5'>{info.title}</h1>
                    <p className='lead'>
                        Rating&nbsp;{info.rating && info.rating.rate}&nbsp;
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        ${info.price}
                    </h3>
                    <p className=''>
                        {info.description}
                    </p>
                    <button className="btn btn-outline-dark" onClick={()=>addProduct(info)}>Add to Cart</button>
                </div>

            </>
        )
    }
    return (
        <div>
            <div className='container py-5'>
                <div className='row py-4'>
                    {loading ? <Loading/> : <ShowInfo/>}
                </div>
            </div>
        </div>
    )
}
export default Info;


