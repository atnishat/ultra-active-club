import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product);
    const {category, forAge, img, name, time} = props.product ;
    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <h2 className='name'>{name}</h2>
            <p>{category}</p>
            <p><small>For Age: {forAge}</small></p>
            <p><small>Time: {time}</small></p>
        </div>
    );
};

export default Product;