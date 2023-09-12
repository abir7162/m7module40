
import './country.css'
const Country = ({Shamim}) =>{
    const {name, flags} = Shamim;

    return(
        <div className='country'>

            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};
export default Country;