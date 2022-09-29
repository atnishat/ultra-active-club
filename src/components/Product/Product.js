import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product);
    const {category, forAge, img, name, time} = props.product ;
    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <h2 className='name'>{name}</h2>
            <p className='category'>{category}</p>
            <p><small className='age'>For Age: {forAge}</small></p>
            <p><small className='time'>Time Required: {time}</small></p>

            <button className='btn-list'> 
            <p>Add To List</p>
            </button>
        </div>
    );
};

export default Product;