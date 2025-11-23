
import Navbar from "./navbar"
import AutoScrollImages from './autoScrollImages'
import Content from "./content"
import CartItem from "./cartItem"
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jpg"
import img3 from "./assets/img3.jpg"
import img4 from "./assets/img4.jpg"
import img5 from "./assets/img5.jpg"
import { useState } from "react"

function ProductList()
{
    let [products,setproducts]=useState([
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
        id:6,
        image:img1,
        name:"POCO-C71",
        color:"(Cool Blue, 128 GB)",
        price:6799 ,
        offer:"₹9,999",
        offerper:" 32% off",
        rating:"4.5"
    },
    {
        id:7,
        image:img2,
        name:"MOTOROLA-Edge-60-Pro" ,
        color:"(Pantone Shadow, 256 GB)",
        price:31999 ,
        offer:" ₹40,999",
        offerper:" 21% off",
        rating:"4.3"
    },
    {
        id:8,
        image:img3,
        name:"POCO-C71" ,
        color:"(Power Black, 128 GB)",
        price:6799,
        offer:" ₹9,999",
        offerper:" 32% off", 
        rating:"4.5"
    },
    {
        id:9,
        image:img4,
        name:"OPPO-K13x-5G",
        color:"(Breeze Blue, 128 GB)",
        price:12999,
        offer:" ₹16,999",
        offerper:" 23% off",
        rating:"4.2"
    },
    {
        id:10,
        image:img5,
        name:"REDMI-Note-14-SE-5G",
        color:"(Titan Black, 128 GB)",
        price:13499,
        offer:" ₹19,999",
        offerper:" 32% off", 
        rating:"4.1",
    },
    {
        id:11,
        image:img1,
        name:"POCO-C71",
        color:"(Cool Blue, 128 GB)",
        price:6799 ,
        offer:"₹9,999",
        offerper:" 32% off",
        rating:"4.5"
    },
    {
        id:12,
        image:img2,
        name:"MOTOROLA-Edge-60-Pro" ,
        color:"(Pantone Shadow, 256 GB)",
        price:31999 ,
        offer:" ₹40,999",
        offerper:" 21% off",
        rating:"4.3"
    },
    {
        id:13,
        image:img3,
        name:"POCO-C71" ,
        color:"(Power Black, 128 GB)",
        price:6799,
        offer:" ₹9,999",
        offerper:" 32% off", 
        rating:"4.5"
    },
    {
        id:14,
        image:img4,
        name:"OPPO-K13x-5G",
        color:"(Breeze Blue, 128 GB)",
        price:12999,
        offer:" ₹16,999",
        offerper:" 23% off",
        rating:"4.2"
    },
    {
        id:15,
        image:img5,
        name:"REDMI-Note-14-SE-5G",
        color:"(Titan Black, 128 GB)",
        price:13499,
        offer:" ₹19,999",
        offerper:" 32% off", 
        rating:"4.1",
    },
    {
        id:16,
        image:img1,
        name:"POCO-C71",
        color:"(Cool Blue, 128 GB)",
        price:6799 ,
        offer:"₹9,999",
        offerper:" 32% off",
        rating:"4.5"
    },
    {
        id:17,
        image:img2,
        name:"MOTOROLA-Edge-60-Pro" ,
        color:"(Pantone Shadow, 256 GB)",
        price:31999 ,
        offer:" ₹40,999",
        offerper:" 21% off",
        rating:"4.3"
    },
    {
        id:18,
        image:img3,
        name:"POCO-C71" ,
        color:"(Power Black, 128 GB)",
        price:6799,
        offer:" ₹9,999",
        offerper:" 32% off", 
        rating:"4.5"
    },
    {
        id:19,
        image:img4,
        name:"OPPO-K13x-5G",
        color:"(Breeze Blue, 128 GB)",
        price:12999,
        offer:" ₹16,999",
        offerper:" 23% off",
        rating:"4.2"
    },
    {
        id:20,
        image:img5,
        name:"REDMI-Note-14-SE-5G",
        color:"(Titan Black, 128 GB)",
        price:13499,
        offer:" ₹19,999",
        offerper:" 32% off", 
        rating:"4.1",
    },
    {
        id:21,
        image:img1,
        name:"POCO-C71",
        color:"(Cool Blue, 128 GB)",
        price:6799 ,
        offer:"₹9,999",
        offerper:" 32% off",
        rating:"4.5"
    },
    {
        id:22,
        image:img2,
        name:"MOTOROLA-Edge-60-Pro" ,
        color:"(Pantone Shadow, 256 GB)",
        price:31999 ,
        offer:" ₹40,999",
        offerper:" 21% off",
        rating:"4.3"
    },
    {
        id:23,
        image:img3,
        name:"POCO-C71" ,
        color:"(Power Black, 128 GB)",
        price:6799,
        offer:" ₹9,999",
        offerper:" 32% off", 
        rating:"4.5"
    },
    {
        id:24,
        image:img4,
        name:"OPPO-K13x-5G",
        color:"(Breeze Blue, 128 GB)",
        price:12999,
        offer:" ₹16,999",
        offerper:" 23% off",
        rating:"4.2"
    }
]);  
function handleDelete(id)
{
    console.log(id);
    const updatedList=products.filter((product)=>product.id != id)
    setproducts(updatedList);
}
    //const ser=products.filter((item)=>item.price>10000)
    const productsItemList=products.map((item) => (
                <Content
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    color={item.color}
                    price={item.price}
                    offer={item.offer}
                    offerper={item.offerper}
                    rating={item.rating}
                    delete={handleDelete}
                />));
    
    return(
        <>
        <Navbar/>
        <AutoScrollImages/>
         <div className="product-grid">
        {productsItemList}
        </div>
        </>
    );
}
export default ProductList
