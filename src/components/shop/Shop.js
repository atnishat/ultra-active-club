import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import logo from '../../Images/logo2.jpg'
const Shop = () => {
        const [products, setProducts] = useState([])
    useEffect( () => {
            fetch('data.json')
           .then(res => res.json())
           .then(data => setProducts(data))

    } , [])


    return (
        <div className='shop-container'>
            <div className='product-container'>

        {

                products.map(product => <Product 
                    key={product.id}
                    product={product}
                
                ></Product>)


        }
   </div>
            <div className='cart-container'>
                <div className='user-details'>
                    <img src={logo} alt="" />
                    <div className='user-info'>
                        <h4>Tasnim Nishat</h4>
                        <p>Sylhet,BD</p>
                    </div>
                </div>

                <div className='total'>
                        <div className='info'>
                            <h6>75kg</h6>
                            <h6>6.5</h6>
                            <h6>25yrs</h6>
                        </div>
                        <div className='info-2'>
                            <p>Weight</p>
                            <p>Height</p>
                            <p>Age</p>
                        </div>
                    </div>



                <div className='break'>
                    <h2>Add A Break</h2>
                    <div className='break-time'>
                        <h5>10s</h5>
                        <h5>20s</h5>
                        <h5>30s</h5>
                        <h5>40s</h5>
                        <h5>50s</h5>
                    </div>
                </div>

                <div className='exercise-details'>
                    <h2>Exercise Details</h2>
                        <div className='e-time'>
                            <h4>Exercise time:</h4>
                            <p>0 seconds</p>
                        </div>
                        <div className='b-time'>
                            <h4>Break time:</h4>
                            <p>0 seconds</p>
                        </div>
                </div>
                <div>
                    <button className='btn-complete'>
                        <p>Activity Completed</p>
                        </button>
                </div>

            </div>
        </div>
    );
};

export default Shop;