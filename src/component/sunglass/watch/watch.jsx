import React from 'react';

const Watch = ({walWatch}) => {
    // console.log(gori)
    const {name, price} = walWatch;
    return (
        <div>
            <h2>Watch:{name}</h2>
            <p>price: {price}</p>
        </div>
    );
};

export default Watch;