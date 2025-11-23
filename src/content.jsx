function Content(props)
{
    return(
        <div className="container">
            <img src={props.image} alt="image"/>
            <h5>{props.name}</h5>
            <h5>{props.color}</h5>
            <h5>{props.price} <span className="strike">{props.offer}</span>{props.offerper}</h5>
            <h5>Rating:{props.rating}</h5>
            <button>Add to Cart</button>
        </div>
    );
}
export default Content