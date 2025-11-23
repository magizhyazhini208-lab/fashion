import Content from "./content"
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jpg"
import img3 from "./assets/img3.jpg"
import img4 from "./assets/img4.jpg"
import img5 from "./assets/img5.jpg"

function ProductList()
{
    const products=[
    {
        id:1,
        image:img1,
        name:"POCO-C71",
        color:"(Cool Blue, 128 GB)",
        price:6799 ,
        offer:"₹9,999",
        offerper:" 32% off",
        rating:"4.5"
    },
    {
        id:2,
        image:img2,
        name:"MOTOROLA-Edge-60-Pro" ,
        color:"(Pantone Shadow, 256 GB)",
        price:31999 ,
        offer:" ₹40,999",
        offerper:" 21% off",
        rating:"4.3"
    },
    {
        id:3,
        image:img3,
        name:"POCO-C71" ,
        color:"(Power Black, 128 GB)",
        price:6799,
        offer:" ₹9,999",
        offerper:" 32% off", 
        rating:"4.5"
    },
    {
        id:4,
        image:img4,
        name:"OPPO-K13x-5G",
        color:"(Breeze Blue, 128 GB)",
        price:12999,
        offer:" ₹16,999",
        offerper:" 23% off",
        rating:"4.2"
    },
    {
        id:5,
        image:img5,
        name:"REDMI-Note-14-SE-5G",
        color:"(Titan Black, 128 GB)",
        price:13499,
        offer:" ₹19,999",
        offerper:" 32% off", 
        rating:"4.1",
    },
    {
        id:1,
        image:img1,
        name:"POCO-C71",
        color:"(Cool Blue, 128 GB)",
        price:6799 ,
        offer:"₹9,999",
        offerper:" 32% off",
        rating:"4.5"
    },
    {
        id:2,
        image:img2,
        name:"MOTOROLA-Edge-60-Pro" ,
        color:"(Pantone Shadow, 256 GB)",
        price:31999 ,
        offer:" ₹40,999",
        offerper:" 21% off",
        rating:"4.3"
    },
    {
        id:3,
        image:img3,
        name:"POCO-C71" ,
        color:"(Power Black, 128 GB)",
        price:6799,
        offer:" ₹9,999",
        offerper:" 32% off", 
        rating:"4.5"
    },
    {
        id:4,
        image:img4,
        name:"OPPO-K13x-5G",
        color:"(Breeze Blue, 128 GB)",
        price:12999,
        offer:" ₹16,999",
        offerper:" 23% off",
        rating:"4.2"
    },
    {
        id:5,
        image:img5,
        name:"REDMI-Note-14-SE-5G",
        color:"(Titan Black, 128 GB)",
        price:13499,
        offer:" ₹19,999",
        offerper:" 32% off", 
        rating:"4.1",
    },
    {
        id:1,
        image:img1,
        name:"POCO-C71",
        color:"(Cool Blue, 128 GB)",
        price:6799 ,
        offer:"₹9,999",
        offerper:" 32% off",
        rating:"4.5"
    },
    {
        id:2,
        image:img2,
        name:"MOTOROLA-Edge-60-Pro" ,
        color:"(Pantone Shadow, 256 GB)",
        price:31999 ,
        offer:" ₹40,999",
        offerper:" 21% off",
        rating:"4.3"
    },
    {
        id:3,
        image:img3,
        name:"POCO-C71" ,
        color:"(Power Black, 128 GB)",
        price:6799,
        offer:" ₹9,999",
        offerper:" 32% off", 
        rating:"4.5"
    },
    {
        id:4,
        image:img4,
        name:"OPPO-K13x-5G",
        color:"(Breeze Blue, 128 GB)",
        price:12999,
        offer:" ₹16,999",
        offerper:" 23% off",
        rating:"4.2"
    },
    {
        id:5,
        image:img5,
        name:"REDMI-Note-14-SE-5G",
        color:"(Titan Black, 128 GB)",
        price:13499,
        offer:" ₹19,999",
        offerper:" 32% off", 
        rating:"4.1",
    },
    {
        id:1,
        image:img1,
        name:"POCO-C71",
        color:"(Cool Blue, 128 GB)",
        price:6799 ,
        offer:"₹9,999",
        offerper:" 32% off",
        rating:"4.5"
    },
    {
        id:2,
        image:img2,
        name:"MOTOROLA-Edge-60-Pro" ,
        color:"(Pantone Shadow, 256 GB)",
        price:31999 ,
        offer:" ₹40,999",
        offerper:" 21% off",
        rating:"4.3"
    },
    {
        id:3,
        image:img3,
        name:"POCO-C71" ,
        color:"(Power Black, 128 GB)",
        price:6799,
        offer:" ₹9,999",
        offerper:" 32% off", 
        rating:"4.5"
    },
    {
        id:4,
        image:img4,
        name:"OPPO-K13x-5G",
        color:"(Breeze Blue, 128 GB)",
        price:12999,
        offer:" ₹16,999",
        offerper:" 23% off",
        rating:"4.2"
    },
    {
        id:5,
        image:img5,
        name:"REDMI-Note-14-SE-5G",
        color:"(Titan Black, 128 GB)",
        price:13499,
        offer:" ₹19,999",
        offerper:" 32% off", 
        rating:"4.1",
    },
    {
        id:1,
        image:img1,
        name:"POCO-C71",
        color:"(Cool Blue, 128 GB)",
        price:6799 ,
        offer:"₹9,999",
        offerper:" 32% off",
        rating:"4.5"
    },
    {
        id:2,
        image:img2,
        name:"MOTOROLA-Edge-60-Pro" ,
        color:"(Pantone Shadow, 256 GB)",
        price:31999 ,
        offer:" ₹40,999",
        offerper:" 21% off",
        rating:"4.3"
    },
    {
        id:3,
        image:img3,
        name:"POCO-C71" ,
        color:"(Power Black, 128 GB)",
        price:6799,
        offer:" ₹9,999",
        offerper:" 32% off", 
        rating:"4.5"
    },
    {
        id:4,
        image:img4,
        name:"OPPO-K13x-5G",
        color:"(Breeze Blue, 128 GB)",
        price:12999,
        offer:" ₹16,999",
        offerper:" 23% off",
        rating:"4.2"
    }
]
    return(
        <>
         <div className="product-grid">
            {products.map((item, index) => (
                <Content
                    key={index}
                    image={item.image}
                    name={item.name}
                    color={item.color}
                    price={item.price}
                    offer={item.offer}
                    offerper={item.offerper}
                    rating={item.rating}
                />
            ))}
        </div>
        </>
    );
}
export default ProductList
