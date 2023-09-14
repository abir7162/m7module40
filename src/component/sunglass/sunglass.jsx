import React, { useEffect } from 'react';
import './sunglass.css';
import Watch from './watch/watch';
import { add, multiply, divideTheFirstNumberByTheSecondNumber as divide} from './Utils/Calculate';
// import add from './Utils/Calculate';




const sunglass = () => {
const first = 55;
const second = 199;
const sum = add(first, second);
const mult = multiply(first, second);
const vag = divide(first, second);
useEffect

    return (
        <div>
            <Watch></Watch>
            
        </div>
    );
};

export default sunglass;