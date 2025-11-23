import { useState } from "react";
function Content(props)
{
    let [inCart,setinCart]=useState(false);
    function itemCart()
    {
        setinCart(prev => !prev);
    }
    const purchase = inCart ? "Go To Cart" : "Add to Cart";
    const bgcolor = inCart ? "green" : "royalblue";
    return(
        <div className="container">
            <img src={props.image} alt="image"/>
            <h5>{props.name}</h5>
            <h5>{props.color}</h5>
            <h5>{props.price} <span className="strike">{props.offer}</span>{props.offerper}</h5>
            <h5>Rating:{props.rating}</h5>
            <button style={{backgroundColor:bgcolor}} onClick={itemCart}>{purchase}</button>
            <button  onClick={()=>{props.delete(props.id)}}>Delete</button>
        </div>
    );
}
export default Content