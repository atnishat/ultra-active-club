import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
const Shop = () => {
        const [products, setProducts] = useState([])
        const [cart, setCart] = useState([])
    useEffect( () => {
            fetch('data.json')
           .then(res => res.json())
           .then(data => setProducts(data))

    } , [])

    const handleClick =(product) =>{
       const newCart = [...cart, product]
        setCart(newCart);
        // console.log(cart,product);
    }



    return (
        <div className='shop-container'>
            <div className='product-container'>

        {

                products.map(product => <Product 
                    key={product.id}
                    product={product}
                    handleClick={handleClick}
                
                ></Product>)


        }
          </div>
           <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;