import { useState } from 'react';
import'./desh.css'
const Desh = ({country, handleVisited}) =>{
    const {name, flags, population, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handle = () =>{
        setVisited(!visited)
    }
console.log
return(

    <div className={`desh ${visited && 'Visited'}`}>
       <h3 style={{color: visited? 'purple': 'white' }}>{name.common}</h3>  
       <img src={flags.png} alt="" /> 
       <p>Population: {population}</p>
       <p><small>Code: {cca3}</small></p>    
       <button onClick={()=> handleVisited(country)}>mark visit</button>
       <br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        <button onClick={handle}>{visited?'visited': 'go visit'}</button>
        {visited? 'i have visited this country': 'i want to visit'}
    </div>
);

};
export default Desh;