import { useEffect } from "react";
import { useState } from "react";
import Desh from "./Desh";
import './countries.css'


const Countries = () => {
const [countries, setcountries] = useState([]);
const [visitedCountries, setVisitedCountries] = useState([])
useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setcountries(data))
}, [])

    const handleVisited = (country) =>{
        console.log('add this to your visited country')
        // ai khane problem ase
        const newVisitedCountry = [...visitedCountries, country];
        console.log(newVisitedCountry)
        setVisitedCountries(newVisitedCountry);

    }

    return (
        <div>
          <h3>Countries: {countries.length }</h3>  

          <div>
            <h5>visited countries: {visitedCountries.length}</h5>
            <ul>
                {
                    visitedCountries.map(hello => <li key={hello.cca3}>{hello.name.common}</li>)

                }
            </ul>
          </div>
        
            
           <div className="countries">

            {
            countries.map(info2 => <Desh key={info2.cca3} handleVisited={handleVisited} country={info2}></Desh>)
            
                }
            </div>

        
            {/* {
            countries.map((info) =><Country Shamim={info} key={info.name.common}></Country>) 
            } */}
        </div>
    );
};

export default Countries; 