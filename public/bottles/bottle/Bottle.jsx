
import'./botol.css'
const Bottle = ({botol,  handleAddToCart}) => {
    const {name, img, price} = botol;
    return (
        <div className="botol">
           <h3>Bottle:{name}</h3> 
           <img src={img} alt="" />
           <p>price:${price}</p>
           <button onClick={() => handleAddToCart(botol)}>Purchase</button>
        </div>
    );
};

export default Bottle;