import React, { useEffect, useState } from 'react';
import Bottle from './bottle/Bottle';
import'../Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart,setCart] = useState([])
    useEffect(() =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

const handleAddToCart = (botol) =>{
    const newCart = [...cart,botol];
    // problem
    setCart(newCart)
}

    return (
        <div>
          <h2>bottle here:{bottles.length}</h2> 
          <h3>cart Add:{cart.length}</h3>

      <div className='botol-container'>
      {
            bottles.map(thisi => <Bottle key={thisi.id} botol={thisi} handleAddToCart={handleAddToCart}></Bottle>)
        }

      </div>
        </div>

     
    );
};

export default Bottles;