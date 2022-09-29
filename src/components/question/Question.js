import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div>

            <div className='question'>
                <h1>How does React works?</h1>
                <p>React is a JavaScript library (not a framework) that creates user interfaces 
                    (UIs) in a predictable and efficient way using declarative code. You can use
                     it to help build single page applications and mobile apps, or to build complex
                      apps if you utilise it with other libraries.</p>
            </div>
                <div className='question-2'>
                    <h1>Different between Props and State?</h1>

                    <p>State: The state is an updatable structure that is used to contain data or 
                        information about the component and can change over time. The change in 
                        state can happen as a response to user action or system event. It is the 
                        heart of the react component which determines the behavior of the component 
                        and how it will render. A state must be kept as simple as possible. It 
                        represents the component's local state or information. It can only be 
                        accessed or modified inside the component or by the component directly.
        <br />
                       Props: Props are read-only components. It is an object which stores the 
                       value of attributes of a tag and work similar to the HTML attributes. 
                       It allows passing data from one component to other components. It is 
                       similar to function arguments and can be passed to the component the 
                       same way as arguments passed in a function. Props are immutable so 
                       we cannot modify the props from inside the component.</p>
                </div>

                    <div className='question-3'>
                        <h1>what does useeffect do without load api through fetch?</h1>
                        <p>The useEffect Hook allows you to perform side effects in your components.
                      Some examples of side effects are: fetching data, directly updating the DOM, and timers.
                      useEffect accepts two arguments. The second argument is optional.</p>
                    </div>




        </div>
    );
};

export default Question;