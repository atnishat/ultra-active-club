import React, { useState } from 'react';
import logo from '../../Images/logo2.jpg'
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const Cart = (props) => {
    
    const notify = () => toast(" WOW, Activity Complited!");


    const {cart} = props;
    let fullTime;

    const clickForBreak =(e)=>{
       const breakTime = e.target.innerText;
       const breakField= document.getElementById('break');
       breakField.innerText = breakTime;
       
    }

    for(const product of cart){
        fullTime = product.time;
    //    console.log(fullTime);
    }
    return (
        <div className='cart'>
                 <div className='cart-container'>
                 {/* <h1>item: {cart.length}</h1> */}
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
                        <button onClick={clickForBreak}>10S</button>
                        <button onClick={clickForBreak}>20S</button>
                        <button onClick={clickForBreak}>30S</button>
                        <button onClick={clickForBreak}>40S</button>
                        <button onClick={clickForBreak}>50S</button>
                        
                    </div>
                </div>

                <div className='exercise-details'>
                    <h2>Exercise Details</h2>
                        <div className='e-time'>
                            <h4>Exercise time:</h4>
                            <p>{fullTime}</p>
                        </div>
                        <div className='b-time'>
                            <h4 >Break time:</h4>
                            <p id='break'></p>
                        </div>
                </div>
                <div>
                    <button onClick={notify} className='btn-complete'>
                    <ToastContainer />
                        <p>Activity Completed</p>
                        </button>
                </div>

            </div>
        </div>
    );
   
};





export default Cart;