import { useState, useEffect } from "react";
function Navbar()
{
    const colors= ["red", "blue", "green", "brown"];
        const [index, setIndex] = useState(0);
    
        useEffect(() => {
            const interval = setInterval(() => {
                setIndex(prev => (prev + 1) % colors.length);
            }, 1000); // 10 seconds
    
            return () => clearInterval(interval);
        }, []);
    
        return(
        <div className="navbar">
            <input type="text" name="searchbar"  placeholder="🔎search" className='display'/>
            <h1>Welcome To Forever Fashion!!!!{colors.index}</h1> 
            <h5 className="navbar1" style={{ color: colors[index], transition: "color 0.5s ease" }}>Sale is live now!!!!{colors.index}</h5> 
        </div>
    
    );
    
}
export default Navbar